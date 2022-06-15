import clsx from 'clsx'
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
  const online = useMemo<boolean>(() => world.javaOnline, [world])

  return (
    <div
      className={clsx(
        'flex items-center gap-[5px]',
        center && 'justify-center',
        className
      )}
    >
      <OnlineIndicator online={online} glow={glow} />

      <span className='text-xs font-semibold leading-none'>
        {online
          ? `${world.playersOnline.toLocaleString()} PLAYERS ONLINE`
          : 'OFFLINE'}
      </span>
    </div>
  )
}

interface IndicatorProps {
  online: boolean
  glow?: boolean
}

// TODO: Implement glow
const OnlineIndicator: FC<IndicatorProps> = ({ online, glow }) => (
  <div
    className={clsx(
      '[--oi-size:0.4em] w-[var(--oi-size)] h-[var(--oi-size)] aspect-square rounded-full',
      online && 'bg-cta-green',
      !online && 'bg-neutral-500'
    )}
  />
)
