import { type FC, useState } from 'react'
import { Card, CardBody, CardTitle } from '~/components/layout/Card'
import { type DisplayHandler, Dropdown } from '~/components/ui/Dropdown'
import { Searchbar } from '~/components/ui/Searchbar'
import { InventoryItem } from './InventoryItem'

// TODO: Hook up to global state
const slotFilter = {
  all: 'All',
} as const

// TODO: Hook up to global state
const raritySort = {
  highToLow: 'High to Low',
  // TODO: More sort options
} as const

const displayRaritySort: DisplayHandler<typeof raritySort> = (value, options) =>
  `Rarity: ${options[value]}`

// TODO: Hook up to global state
const dateSort = {
  mostRecent: 'Most Recent',
  // TODO: More sort options
} as const

const displayDateSort: DisplayHandler<typeof dateSort> = (value, options) =>
  `Date Aquired: ${options[value]}`

// TODO: Replace with actual data
const dummyItems = [...Array.from({ length: 20 })].map((_, idx) => ({
  idx,
  name: 'Blaze Powder',
  image:
    'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7c/Blaze_Powder_JE2_BE1.png',
  description: 'A mysterious hat, known to give its wearer special powers.',
}))

export const FullInventory: FC = () => {
  const [slot, setSlot] = useState<keyof typeof slotFilter>('all')
  const [rarity, setRarity] = useState<keyof typeof raritySort>('highToLow')
  const [date, setDate] = useState<keyof typeof dateSort>('mostRecent')
  const [search, setSearch] = useState<string>('')

  return (
    <Card className='mt-6'>
      <CardTitle className='text-lg font-semibold px-6 py-4'>
        Full Inventory
      </CardTitle>

      <CardBody className='p-5 grid grid-cols-[repeat(5,1fr)] gap-x-4 gap-y-6'>
        <Dropdown options={slotFilter} value={slot} onChange={setSlot} />
        <Dropdown
          options={raritySort}
          value={rarity}
          display={displayRaritySort}
          onChange={setRarity}
        />

        <Dropdown
          options={dateSort}
          value={date}
          display={displayDateSort}
          onChange={setDate}
        />

        <Searchbar
          value={search}
          placeholder='Search Inventory'
          className='col-span-2'
          onChange={setSearch}
        />

        {dummyItems.map(item => (
          <InventoryItem key={item.idx} {...item} />
        ))}
      </CardBody>
    </Card>
  )
}
