import clsx from 'clsx'
import { type CSSProperties, type FC, useCallback } from 'react'
import { ButtonPrimary } from '~/components/ui/ButtonPrimary'
import { ButtonSecondary } from '~/components/ui/ButtonSecondary'
import { PlayersOnline } from '~/components/worlds/PlayersOnline'
import { WorldIcon } from '~/components/worlds/WorldIcon'
import { type World } from '~/lib/data/worlds'

interface Props {
  world: World
  secondary?: 'details'

  className?: string
  style?: CSSProperties
}

export const WorldHeader: FC<Props> = ({
  world,
  secondary,
  className,
  style,
}) => {
  const handleClickPrimary = useCallback(() => {
    // TODO
  }, [])

  const handleClickSecondary = useCallback(() => {
    // TODO
  }, [])

  return (
    <div
      className={clsx('flex flex-col mx-[var(--card-width)] mt-8', className)}
      style={style}
    >
      <div className='flex items-center gap-5'>
        <WorldIcon world={world} />

        <span className='text-sm font-semibold'>#{world.id} WORLD</span>
      </div>

      <h1 className='text-[4.8rem] font-bold leading-none mt-2'>
        {world.name}
      </h1>

      <p className='mt-5 line-clamp-1'>{world.description}</p>

      <div className='flex gap-3 mt-6'>
        <div className='flex flex-col gap-3 items-center'>
          <ButtonPrimary disabled={!world.online} onClick={handleClickPrimary}>
            Play Now
          </ButtonPrimary>

          <PlayersOnline world={world} />
        </div>

        <ButtonSecondary onClick={handleClickSecondary}>
          Secondary Button
        </ButtonSecondary>
      </div>
    </div>
  )
}
