import { type FC } from 'react'
import { type World } from '~/lib/data/worlds'
import { SideContent } from '../side/SideContent'
import { WorldSidebar } from './WorldSidebar'

interface Props {
  title: string
  worlds: readonly World[]
}

export const WorldSidebarContainer: FC<Props> = ({ title, worlds }) => (
  <SideContent className='flex flex-col gap-3'>
    <h2 className='text-sm font-semibold mb-2'>{title}</h2>

    {worlds.map(world => (
      <WorldSidebar key={world.id} world={world} />
    ))}
  </SideContent>
)
