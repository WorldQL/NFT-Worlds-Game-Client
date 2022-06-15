import { type FC } from 'react'
import { type SVGProps } from './props'

export const ListView: FC<SVGProps> = ({ className, style }) => (
  <svg
    width='18'
    height='20'
    viewBox='0 0 18 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    style={style}
  >
    <rect width='17.5591' height='4.5807' rx='1' fill='currentColor' />

    <rect
      y='7.6343'
      width='17.5591'
      height='4.5807'
      rx='1'
      fill='currentColor'
    />

    <rect
      y='15.2688'
      width='17.5591'
      height='4.5807'
      rx='1'
      fill='currentColor'
    />
  </svg>
)
