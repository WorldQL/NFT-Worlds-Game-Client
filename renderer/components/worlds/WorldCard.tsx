import { type FC } from 'react'
import { type World } from '~/lib/worlds'

interface Props {
  world: World
}

export const WorldCard: FC<Props> = ({ world }) => (
  <div className='flex flex-col w-[260px]'>
    <img
      className='h-[200px] object-cover rounded-t-lg'
      src={world.branding.banner}
    />
    <div className='bg-neutral-800 rounded-b-lg p-2 text-center'>
      <h2 className='font-bold text-lg'>{world.name}</h2>

      <span className='font-semibold text-xs text-text-sub'>
        #{world.worldId} WORLD
      </span>

      <p className='text-xs text-text-sub line-clamp-2'>{world.description}</p>

      <span className='font-semibold text-xs text-text-sub'>
        {world.playersOnline} PLAYERS ONLINE
      </span>
    </div>
  </div>
)
