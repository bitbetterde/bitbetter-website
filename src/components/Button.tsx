import { ArrowRightIcon } from '@heroicons/react/24/solid'

interface Props {
  caption: string
  className?: string
  onClick?: () => void
}

const Button = ({ caption, onClick, className }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`bg-black flex gap-2 py-4 px-5 rounded-full items-center font-medium text-white ${
        className || ''
      }`}
    >
      {caption}
      <ArrowRightIcon className='h-6 w-6' />
    </button>
  )
}

export default Button
