import { type NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Layout } from '~/components/layout/Layout'
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
      <h1 className='text-center text-[4.8rem] font-bold my-6'>Worlds</h1>
      <div className='flex gap-[20px] mb-10'>
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

        <div className='grow' />

        <Searchbar
          value=''
          placeholder='Search Worlds'
          onChange={() => {
            void 0
          }}
        />
      </div>

      {worlds ? <WorldGrid worlds={worlds} /> : null}
    </Layout>
  )
}

export default Worlds
