import type { ReactElement, ReactNode } from 'react'

interface ConditionalWrapperProps {
  condition: boolean
  children: ReactElement | ReactNode
  wrapper: (c: ReactElement | ReactNode) => ReactElement | ReactNode | JSX.Element
  falseWrapper?: (c: ReactElement | ReactNode) => ReactElement | ReactNode | JSX.Element
}

export const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  falseWrapper,
  children,
}) => (condition ? wrapper(children) : falseWrapper ? falseWrapper(children) : children)
