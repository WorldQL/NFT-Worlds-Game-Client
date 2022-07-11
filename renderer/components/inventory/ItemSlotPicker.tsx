import { type FC, useState } from 'react'
import { Card, CardBody } from '~/components/layout/Card'
import { Dropdown } from '~/components/ui/Dropdown'

// TODO: Hook up to global state
const itemsFilter = {
  all: 'All Heads',
} as const

// TODO
export const ItemSlotPicker: FC = () => {
  const [filter, setFilter] = useState<keyof typeof itemsFilter>('all')

  return (
    <Card className='w-[28%]'>
      <CardBody noTitle className='flex flex-col items-center p-4'>
        <Dropdown
          options={itemsFilter}
          value={filter}
          className='!w-full'
          onChange={setFilter}
        />
      </CardBody>
    </Card>
  )
}
