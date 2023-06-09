import { ReactComponent as ArrowRightIcon } from '@phosphor-icons/core/regular/arrow-right.svg'

interface Props {
  caption: string
  className?: string
  onClick?: () => void
  dark?: boolean
}

const Button = ({ caption, onClick, className, dark = false }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`flex gap-2 py-4 px-5 rounded-full items-center font-medium ${
        dark ? 'bg-black text-white' : 'bg-white text-bb-grey-500'
      } ${className || ''}`}
    >
      {caption}
      <ArrowRightIcon className='h-6 w-6' />
    </button>
  )
}

export default Button
