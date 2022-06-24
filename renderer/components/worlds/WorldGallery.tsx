import { type FC } from 'react'
import { WorldCard } from '~/components/worlds/WorldCard'
import { type World } from '~/lib/data/worlds'

interface Props {
  title: string
  worlds: readonly World[]
}

export const WorldGallery: FC<Props> = ({ title, worlds: allWorlds }) => {
  const worlds = allWorlds.slice(0, 3)

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center'>
        <h2 className='text-[0.95rem] font-semibold'>{title}</h2>
      </div>

      <div className='flex justify-between'>
        {worlds.map(world => (
          <WorldCard key={world.id} world={world} />
        ))}
      </div>
    </div>
  )
}
