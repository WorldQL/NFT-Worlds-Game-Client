import { clsx } from 'clsx'
import { type CSSProperties, type FC } from 'react'
import { Verified } from '~/components/svg/Verified'
import { type World } from '~/lib/data/worlds'

interface Props {
  world: World
  verified?: boolean

  className?: string
  style?: CSSProperties
}

export const WorldIcon: FC<Props> = ({ world, verified, className, style }) => (
  <div
    className={clsx(
      'relative aspect-square w-[4.5rem] h-auto rounded-full bg-cover border-2 shadow-[inset_0_0_8px_black] bg-neutral-800',
      className
    )}
    style={{ backgroundImage: `url(${world.branding.icon})`, ...style }}
  >
    {verified && (
      <Verified className='absolute top-0 right-0 w-8 h-auto aspect-square translate-x-1/4 -translate-y-1/4' />
    )}
  </div>
)
