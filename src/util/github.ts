// Fetches GitHub issues and pull requests at build time via the public REST API.
//
// Without a token GitHub allows 60 requests per hour and IP. Set GITHUB_TOKEN (any token, no
// scopes needed for public repos) to raise that to 5,000.

type IssueRef = { owner: string; repo: string; number: number }

type IssueStatus =
  | 'open'
  | 'completed'
  | 'not-planned'
  | 'duplicate'
  | 'pr-open'
  | 'pr-draft'
  | 'pr-merged'
  | 'pr-closed'

type Issue = IssueRef & {
  url: string
  title: string
  status: IssueStatus
  /** The date that belongs to the status: opened, closed or merged. */
  date: Date
}

// Accepts "https://github.com/owner/repo/issues/123", ".../pull/123", "owner/repo#123", and,
// together with a default repo ("owner/repo"), "#123" or "123".
function parseIssueRef(input: string, defaultRepo?: string): IssueRef {
  const value = input.trim()

  const url = value.match(/^https?:\/\/github\.com\/([\w.-]+)\/([\w.-]+)\/(?:issues|pull)\/(\d+)/)
  if (url) return { owner: url[1], repo: url[2], number: Number(url[3]) }

  const short = value.match(/^([\w.-]+)\/([\w.-]+)#(\d+)$/)
  if (short) return { owner: short[1], repo: short[2], number: Number(short[3]) }

  const numberOnly = value.match(/^#?(\d+)$/)
  if (numberOnly && defaultRepo) {
    const [owner, repo] = defaultRepo.split('/')
    if (owner && repo) return { owner, repo, number: Number(numberOnly[1]) }
  }

  throw new Error(
    `Unbekannte GitHub-Issue-Angabe "${input}". Erwartet: Issue-/PR-URL, "owner/repo#123" oder eine Nummer zusammen mit dem repo-Prop.`,
  )
}

type ApiIssue = {
  html_url: string
  title: string
  state: 'open' | 'closed'
  state_reason?: 'completed' | 'not_planned' | 'duplicate' | 'reopened' | null
  draft?: boolean
  created_at: string
  closed_at: string | null
  pull_request?: { merged_at: string | null }
}

function toIssue(ref: IssueRef, data: ApiIssue): Issue {
  // Titles are plain text on GitHub, but some authors write Markdown in them anyway.
  const title = data.title.replace(/\*\*(.+?)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1')
  const base = { ...ref, url: data.html_url, title }
  const created = new Date(data.created_at)
  const closed = data.closed_at ? new Date(data.closed_at) : created

  if (data.pull_request) {
    const { merged_at } = data.pull_request
    if (merged_at) return { ...base, status: 'pr-merged', date: new Date(merged_at) }
    if (data.state === 'closed') return { ...base, status: 'pr-closed', date: closed }
    return { ...base, status: data.draft ? 'pr-draft' : 'pr-open', date: created }
  }

  if (data.state === 'open') return { ...base, status: 'open', date: created }
  if (data.state_reason === 'not_planned') return { ...base, status: 'not-planned', date: closed }
  if (data.state_reason === 'duplicate') return { ...base, status: 'duplicate', date: closed }
  return { ...base, status: 'completed', date: closed }
}

// One request per issue and build: several posts (or dev reloads) asking for the same issue share it.
const cache = new Map<string, Promise<Issue | null>>()

function fetchIssue(ref: IssueRef): Promise<Issue | null> {
  const key = `${ref.owner}/${ref.repo}#${ref.number}`.toLowerCase()
  const cached = cache.get(key)
  if (cached) return cached

  const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN
  const request = fetch(
    `https://api.github.com/repos/${ref.owner}/${ref.repo}/issues/${ref.number}`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    },
  )
    .then(async (response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status} ${await response.text()}`)
      return toIssue(ref, (await response.json()) as ApiIssue)
    })
    .catch((error) => {
      // Network problems or rate limits shouldn't break the build; the list shows a plain link instead.
      console.warn(`[GitHubIssues] ${key} konnte nicht geladen werden: ${error}`)
      return null
    })

  cache.set(key, request)
  return request
}

export { parseIssueRef, fetchIssue }
export type { Issue, IssueRef, IssueStatus }
