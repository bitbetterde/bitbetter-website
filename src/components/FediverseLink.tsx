import MastodonIcon from '@phosphor-icons/core/regular/mastodon-logo.svg?react'
import { fediverseProfileUrl } from '../util/fediverse'

interface FediverseLinkProps {
  // Fediverse handle like "@user@mastodon.social"
  handle?: string
  // First name of the person, used for the tooltip and the accessible label
  name: string
  rel?: string
}

// Small, subtle Mastodon icon linking to a person's fediverse profile. Renders nothing without a valid handle.
const FediverseLink: React.FC<FediverseLinkProps> = ({ handle, name, rel = 'noopener' }) => {
  const profileUrl = handle ? fediverseProfileUrl(handle) : undefined
  if (!profileUrl) return null

  return (
    <a
      href={profileUrl}
      target='_blank'
      rel={rel}
      title={`${name} im Fediverse: ${handle}`}
      aria-label={`${name} im Fediverse`}
      className='ml-1.5 inline-block align-middle pb-1 text-black/40 hover:text-black transition-colors'
    >
      <MastodonIcon className='w-5 h-5' aria-hidden='true' />
    </a>
  )
}

export default FediverseLink
