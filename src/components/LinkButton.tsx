import ArrowRightIcon from '@phosphor-icons/core/regular/arrow-right.svg?react'

interface LinkButtonProps {
  caption: string
  className?: string
  href?: string
  variant?: 'dark' | 'white' | 'grey'
  newTab?: boolean
  small?: boolean
  download?: boolean
  umamiEvent?: string
}

const LinkButton: React.FC<LinkButtonProps> = ({
  caption,
  className = '',
  href,
  newTab,
  small,
  variant = 'white',
  download,
  umamiEvent,
}) => {
  const colorClasses = {
    dark: 'bg-black text-white',
    white: 'bg-white text-bb-grey-500',
    grey: 'bg-bb-grey-200 text-bb-grey-500',
  }
  return (
    <a
      href={href}
      className={`flex w-fit gap-2 py-4 px-5 rounded-full items-center font-medium hover:bg-opacity-75 ${colorClasses[variant] || ''} ${small ? 'py-[10px] px-4' : 'py-4 px-5'} ${className}`}
      {...(newTab ? { target: '_blank' } : {})}
      {...(download ? { download: '' } : {})}
      {...(umamiEvent ? { 'data-umami-event': umamiEvent } : {})}
    >
      {caption}
      <ArrowRightIcon className='h-6 w-6' />
    </a>
  )
}

export default LinkButton
