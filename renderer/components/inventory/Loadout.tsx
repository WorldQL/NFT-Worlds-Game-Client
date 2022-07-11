import { type FC } from 'react'
import { LoadoutSlot } from '~/components/inventory/LoadoutSlot'
import { Card, CardBody, CardTitle } from '~/components/layout/Card'

export const Loadout: FC = () => (
  <Card className='w-[28%]'>
    <CardTitle className='text-lg font-semibold px-6 py-4'>Loadout</CardTitle>

    <CardBody className='grid p-5 h-[32rem] grid-rows-inventory grid-cols-inventory gap-2'>
      <LoadoutSlot slot='hat' className='col-start-2' />
      <LoadoutSlot slot='head' className='col-start-2' />
      <LoadoutSlot slot='left-arm' className='col-start-1' />
      <LoadoutSlot slot='torso' />
      <LoadoutSlot slot='right-arm' />
      <LoadoutSlot slot='left-hand' />
      <LoadoutSlot slot='legs' />
      <LoadoutSlot slot='right-hand' />
      <LoadoutSlot slot='feet' className='col-start-2' />
    </CardBody>
  </Card>
)
