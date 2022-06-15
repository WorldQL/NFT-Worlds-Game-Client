import { type FC } from 'react'
import { type SVGProps } from './props'

export const Arrow: FC<SVGProps> = ({ className, style }) => (
  <svg
    width='15'
    height='9'
    viewBox='0 0 15 9'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    style={style}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='m7.7647 7.8695 6.2293-6.2293c.3413-.3627.3413-.9173 0-1.2587-.3414-.3414-.896-.3414-1.2587 0L7.1246 5.9922 1.514.3815C1.1726.0401.5967.0401.2553.3815c-.3413.3414-.3413.896 0 1.2587L6.506 7.8695c.3413.3413.896.3413 1.2586 0Z'
      fill='currentColor'
    />
  </svg>
)
