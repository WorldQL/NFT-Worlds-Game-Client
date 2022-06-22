import { type FC } from 'react'
import { type World } from '~/lib/data/worlds'
import { SideContent } from './SideContent'

interface Props {
  world: World
}

export const Overview: FC<Props> = ({ world }) => (
  <SideContent className='text-sm flex flex-col gap-3'>
    <h3 className='font-semibold'>Overview</h3>
    <p>{world.description}</p>

    <div className='grid grid-cols-2'>
      <p className='text-neutral-300'>Last Update:</p>
      <p className='text-neutral-300'>Release Date:</p>

      {/* Last Updated */}
      <p>{world.lastUpdated.toLocaleDateString()}</p>

      {/* Release Date */}
      <p>{world.lastUpdated.toLocaleDateString()}</p>
    </div>
  </SideContent>
)
