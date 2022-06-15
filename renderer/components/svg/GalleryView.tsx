import { type FC } from 'react'
import { type SVGProps } from './props'

export const GalleryView: FC<SVGProps> = ({ className, style }) => (
  <svg
    width='20'
    height='23'
    viewBox='0 0 20 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    style={style}
  >
    <rect width='8.3979' height='9.9247' rx='1' fill='currentColor' />

    <rect
      y='12.2151'
      width='8.3979'
      height='9.9247'
      rx='1'
      fill='currentColor'
    />

    <rect
      x='11.4517'
      width='8.3979'
      height='9.9247'
      rx='1'
      fill='currentColor'
    />

    <rect
      x='11.4517'
      y='12.2151'
      width='8.3979'
      height='9.9247'
      rx='1'
      fill='currentColor'
    />
  </svg>
)
