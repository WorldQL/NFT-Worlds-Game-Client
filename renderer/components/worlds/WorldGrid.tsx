import { type FC } from 'react'
import { World } from '~/lib/worlds'
import { WorldCard } from './WorldCard'

interface Props {
  worlds: readonly World[]
}

export const WorldGrid: FC<Props> = ({ worlds }) => (
  <div className='w-full grid gap-y-7 grid-cols-[repeat(5,260px)] justify-between'>
    {worlds.map(world => (
      <WorldCard key={world.worldId} world={world} />
    ))}
  </div>
)
