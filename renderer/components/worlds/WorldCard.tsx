import { clsx } from 'clsx'
import { useRouter } from 'next/router'
import { type FC, useCallback } from 'react'
import { PlayersOnline } from '~/components/worlds/PlayersOnline'
import { WorldIcon } from '~/components/worlds/WorldIcon'
import { type World } from '~/lib/data/worlds'

interface Props {
  world: World
}

export const WorldCard: FC<Props> = ({ world }) => {
  const { push } = useRouter()
  const handleClick = useCallback(() => {
    void push(`/worlds/${world.id}`)
  }, [world.id, push])

  return (
    <div
      className={clsx(
        'mb-6 bg-gradient-to-b from-bg-top to-bg-bottom',
        'rounded-2xl shadow-xl',
        'flex flex-col w-[var(--card-width)]',
        'cursor-pointer transition-transform duration-75',
        '[--ring-pad:-8px] relative after:absolute after:-z-10 after:opacity-0',
        'after:top-[var(--ring-pad)] after:left-[var(--ring-pad)] after:bottom-[var(--ring-pad)] after:right-[var(--ring-pad)]',
        'after:pointer-events-none after:rounded-3xl after:border-2 after:scale-95',
        'after:transition-all hover:after:scale-100 hover:after:opacity-100',
        'after:border-card-stroke'
      )}
      onClick={handleClick}
    >
      <div
        className='h-[200px] bg-cover bg-center rounded-t-2xl shadow-card-image'
        style={{ backgroundImage: `url(${world.branding.banner})` }}
      />

      <div className='grow rounded-b-2xl p-3 pt-0 pb-4 text-center border border-white border-opacity-20 border-t-0'>
        <WorldIcon world={world} className='mt-[-2.25rem] mx-auto mb-2' />

        <div>
          <h2 className='font-bold text-lg'>{world.name}</h2>

          <span className='font-semibold text-xs text-text-sub'>
            #{world.id} WORLD
          </span>

          <p className='text-xs text-text-sub line-clamp-2'>
            {world.description}
          </p>

          <PlayersOnline center className='text-text-sub mt-3' world={world} />
        </div>
      </div>
    </div>
  )
}
