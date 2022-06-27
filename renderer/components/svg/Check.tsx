import { type FC } from 'react'
import { type SVGProps } from './props'

export const Check: FC<SVGProps> = ({ className, style }) => (
  <svg
    width='17'
    height='12'
    viewBox='0 0 17 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    style={style}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.4113 6.36055C-0.846614 5.10263 1.06625 3.18919 2.32475 4.4471L6.56235 8.68527L13.9834 0.459661C15.1701 -0.859281 17.1789 0.947708 15.992 2.26752L7.66217 11.5004C7.15708 12.1215 6.22357 12.1721 5.65553 11.6038L0.4113 6.36055Z'
      fill='currentColor'
    />
  </svg>
)
