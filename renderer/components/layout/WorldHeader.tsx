import clsx from 'clsx'
import { useRouter } from 'next/router'
import { type CSSProperties, type FC, useCallback } from 'react'
import { ButtonPrimary } from '~/components/ui/ButtonPrimary'
import { PlayersOnline } from '~/components/worlds/PlayersOnline'
import { WorldIcon } from '~/components/worlds/WorldIcon'
import { type World } from '~/lib/data/worlds'
import { useLauncher } from '~/lib/hooks/useLauncher'
import { ButtonText } from '../ui/ButtonText'

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
  const { push } = useRouter()
  const { launch, running } = useLauncher(world)

  const handleClickPrimary = useCallback(() => launch(), [launch])

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
          <ButtonPrimary
            type='button'
            disabled={!world.online || running}
            onClick={handleClickPrimary}
          >
            {running ? 'Game is Running' : 'Play Now'}
          </ButtonPrimary>

          <PlayersOnline world={world} />
        </div>

        {secondary === 'details' ? (
          <ButtonText type='link' href={`/worlds/${world.id}`}>
            Details
          </ButtonText>
        ) : null}
      </div>
    </div>
  )
}
