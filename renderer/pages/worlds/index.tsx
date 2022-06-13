import { type NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Layout } from '~/components/layout/Layout'
import { TitleHeader } from '~/components/layout/TitleHeader'
import { type DisplayHandler, Dropdown } from '~/components/ui/Dropdown'
import { Searchbar } from '~/components/ui/Searchbar'
import { WorldGrid } from '~/components/worlds/WorldGrid'
import { fetchWorlds, type World } from '~/lib/worlds'

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
  // TODO: Make global
  const [worlds, setWorlds] = useState<readonly World[] | undefined>(undefined)
  useEffect(() => {
    void fetchWorlds().then(worlds => setWorlds(worlds))
  }, [])

  // TODO: Hook up to global state
  const [filter, setFilter] = useState<keyof typeof worldFilter>('all')
  const [sort, setSort] = useState<keyof typeof worldSort>('recentUpdate')

  return (
    <Layout>
      <TitleHeader>Worlds</TitleHeader>

      <div className='mb-8 grid grid-cols-[repeat(5,var(--card-width))] justify-between'>
        <Dropdown options={worldFilter} value={filter} onChange={setFilter} />

        <Dropdown
          value='recentUpdate'
          options={worldSort}
          display={displaySort}
          onChange={() => undefined}
        />

        <div className='col-span-3 flex justify-end'>
          <Searchbar
            value=''
            placeholder='Search Worlds'
            onChange={() => {
              void 0
            }}
          />
        </div>
      </div>

      {worlds ? <WorldGrid worlds={worlds} /> : null}
    </Layout>
  )
}

export default Worlds
