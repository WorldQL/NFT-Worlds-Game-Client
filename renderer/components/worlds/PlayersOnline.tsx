import { clsx } from 'clsx'
import { type FC, useMemo } from 'react'
import { type World } from '~/lib/data/worlds'

interface Props {
  world: World
  glow?: boolean
  center?: boolean

  className?: string
}

export const PlayersOnline: FC<Props> = ({
  world,
  glow,
  center,
  className,
}) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-[5px]',
        center && 'justify-center',
        className
      )}
    >
      <OnlineIndicator online={world.online} glow={glow} />

      <span className='text-xs font-semibold leading-none'>
        {world.online
          ? `${world.players.toLocaleString()} PLAYERS ONLINE`
          : 'OFFLINE'}
      </span>
    </div>
  )
}

interface IndicatorProps {
  online: boolean
  glow?: boolean
}

const OnlineIndicator: FC<IndicatorProps> = ({ online, glow }) => (
  <div
    className={clsx(
      'isolate relative aspect-square rounded-full',
      '[--oi-size:6px] w-[var(--oi-size)] h-[var(--oi-size)]',
      glow && 'after:-z-10 after:rounded-full after:absolute',
      glow && 'after:top-0 after:left-0 after:bottom-0 after:right-0',
      online && 'bg-cta-green after:bg-cta-green',
      online && glow && 'motion-safe:after:animate-ping',
      !online && 'bg-neutral-500'
    )}
  />
)
