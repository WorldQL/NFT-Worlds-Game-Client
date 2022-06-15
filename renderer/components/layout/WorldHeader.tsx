import { type FC, useCallback } from 'react'
import { ButtonPrimary } from '~/components/ui/ButtonPrimary'
import { ButtonSecondary } from '~/components/ui/ButtonSecondary'
import { PlayersOnline } from '~/components/worlds/PlayersOnline'
import { type World } from '~/lib/data/worlds'

interface Props {
  world: World
}

export const WorldHeader: FC<Props> = ({ world }) => {
  const handleClickPrimary = useCallback(() => {
    // TODO
  }, [])

  const handleClickSecondary = useCallback(() => {
    // TODO
  }, [])

  return (
    <div className='flex flex-col mx-[var(--card-width)] mt-8'>
      <div className='flex items-center gap-5'>
        <div
          className='aspect-square w-[4.5rem] h-auto rounded-full bg-cover border-2 shadow-[inset_0_0_8px_black]'
          style={{ backgroundImage: `url(${world.branding.icon})` }}
        />

        <span className='text-sm'>#{world.worldId} WORLD</span>
      </div>

      <h1 className='text-[4.8rem] font-bold leading-none mt-2'>
        {world.name}
      </h1>

      <p className='mt-5 line-clamp-1'>{world.description}</p>

      <div className='flex gap-3 mt-6'>
        <div className='flex flex-col gap-3 items-center'>
          <ButtonPrimary
            disabled={!world.javaOnline}
            onClick={handleClickPrimary}
          >
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
