/** Offset props: a number is in rem, a string is used as a CSS length. */
export const toCssLength = (value?: number | string) =>
  typeof value === 'number' ? `${value}rem` : value
