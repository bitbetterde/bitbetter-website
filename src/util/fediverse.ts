// Turns a fediverse handle like "@user@mastodon.social" into its profile URL ("https://mastodon.social/@user").
// The /@user path works on Mastodon and most other servers (GoToSocial, Misskey, Akkoma, …).
export const fediverseProfileUrl = (handle: string): string | undefined => {
  const match = handle.trim().match(/^@?([^@\s]+)@([^@\s]+)$/)
  return match ? `https://${match[2]}/@${match[1]}` : undefined
}
