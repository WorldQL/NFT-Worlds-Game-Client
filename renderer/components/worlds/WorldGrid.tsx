import { type FC } from 'react'
import { World } from '~/lib/data/worlds'
import { WorldCard } from './WorldCard'

interface Props {
  worlds: readonly World[]
}

export const WorldGrid: FC<Props> = ({ worlds }) => (
  <div className='isolate pt-4 unpad flex-1 overflow-y-scroll grid grid-cols-[repeat(5,var(--card-width))] justify-between scrollbar-none'>
    {worlds.map(world => (
      <WorldCard key={world.id} world={world} />
    ))}
  </div>
)
