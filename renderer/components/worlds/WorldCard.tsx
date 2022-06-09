import { type FC } from 'react'
import { type World } from '~/lib/worlds'

interface Props {
  world: World
}

export const WorldCard: FC<Props> = ({ world }) => (
  <div className='flex flex-col w-[var(--card-width)]'>
    <img
      className='h-[200px] object-cover rounded-t-lg'
      src={world.branding.banner}
    />
    <div className='bg-neutral-800 rounded-b-lg p-3 pt-0 pb-4 text-center'>
      <div
        className='aspect-square w-[4.5rem] h-auto rounded-full bg-cover border-2 shadow-[inset_0_0_8px_black] mt-[-2.25rem] mx-auto mb-2'
        style={{ backgroundImage: `url(${world.branding.icon})` }}
      />

      <div>
        <h2 className='font-bold text-lg'>{world.name}</h2>

        <span className='font-semibold text-xs text-text-sub'>
          #{world.worldId} WORLD
        </span>

        <p className='text-xs text-text-sub line-clamp-2'>
          {world.description}
        </p>

        <span className='font-semibold text-xs text-text-sub'>
          {world.playersOnline} PLAYERS ONLINE
        </span>
      </div>
    </div>
  </div>
)
