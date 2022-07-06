import { type NextPage } from 'next'
import { useState } from 'react'
import { Layout } from '~/components/layout/Layout'
import { TitleHeader } from '~/components/layout/TitleHeader'
import { type DisplayHandler, Dropdown } from '~/components/ui/Dropdown'
import { Searchbar } from '~/components/ui/Searchbar'
import { ToggleViewButton, type View } from '~/components/ui/ToggleViewButton'
import { WorldGrid } from '~/components/worlds/WorldGrid'
import { useWorlds } from '~/lib/hooks/useWorlds'

// TODO: Hook up to global state
const worldFilter = {
  all: 'All Worlds',
  singleplayer: 'Single Player',
  multiplayer: 'Multiplayer',
  firstPerson: 'First Person',
  thirdPerson: 'Third Person',
} as const

// TODO: Hook up to global state
const worldSort = {
  recentUpdate: 'Recently Updated',
  // TODO: More sort options
} as const

const displaySort: DisplayHandler<typeof worldSort> = (value, options) =>
  `Sort: ${options[value]}`

const Worlds: NextPage = () => {
  const { worlds } = useWorlds()

  // TODO: Hook up to global state
  const [filter, setFilter] = useState<keyof typeof worldFilter>('all')
  const [sort, setSort] = useState<keyof typeof worldSort>('recentUpdate')
  const [search, setSearch] = useState<string>('')
  const [view, setView] = useState<View>('grid')

  return (
    <Layout>
      <TitleHeader>Worlds</TitleHeader>

      <div className='mb-4 grid grid-cols-[repeat(5,var(--card-width))] justify-between'>
        <Dropdown options={worldFilter} value={filter} onChange={setFilter} />

        <Dropdown
          value={sort}
          options={worldSort}
          display={displaySort}
          onChange={setSort}
        />

        <div className='col-span-1' />

        <div className='col-span-2 flex justify-end gap-3'>
          <Searchbar
            value={search}
            placeholder='Search Worlds'
            onChange={setSearch}
          />

          <ToggleViewButton view={view} onChange={setView} />
        </div>
      </div>

      {worlds ? view === 'grid' ? <WorldGrid worlds={worlds} /> : null : null}
    </Layout>
  )
}

export default Worlds
