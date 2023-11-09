import { ReactComponent as ArrowRightIcon } from '@phosphor-icons/core/regular/arrow-right.svg'

interface Props {
  caption: string
  className?: string
  href?: string
  dark?: boolean
  newTab?: boolean
  small?: boolean
}

const LinkButton: React.FC<Props> = ({
  caption,
  className,
  href,
  newTab,
  small,
  dark = false,
}: Props) => {
  return (
    <a
      href={href}
      className={`flex w-fit gap-2 py-4 px-5 rounded-full items-center font-medium hover:bg-opacity-75 ${
        dark ? 'bg-black text-white' : 'bg-white text-bb-grey-500'
      } ${small ? 'py-[10px] px-4' : 'py-4 px-5'} ${className || ''}`}
      {...(newTab ? { target: '_blank' } : {})}
    >
      {caption}
      <ArrowRightIcon className='h-6 w-6' />
    </a>
  )
}

export default LinkButton
