import { type NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Layout } from '~/components/layout/Layout'
import { TitleHeader } from '~/components/layout/TitleHeader'
import { Dropdown } from '~/components/ui/Dropdown'
import { Searchbar } from '~/components/ui/Searchbar'
import { WorldGrid } from '~/components/worlds/WorldGrid'
import { fetchWorlds, type World } from '~/lib/worlds'

const Worlds: NextPage = () => {
  const [worlds, setWorlds] = useState<readonly World[] | undefined>(undefined)
  useEffect(() => {
    void fetchWorlds().then(worlds => setWorlds(worlds))
  }, [])

  return (
    <Layout>
      <TitleHeader>Worlds</TitleHeader>

      <div className='mb-8 grid grid-cols-[repeat(5,var(--card-width))] justify-between'>
        <Dropdown
          value=''
          options={['All Worlds']}
          onChange={() => undefined}
        />

        <Dropdown
          value=''
          options={['Sort: Recently Updated']}
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
