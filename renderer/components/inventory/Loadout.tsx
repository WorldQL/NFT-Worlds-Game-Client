import { type FC } from 'react'
import { LoadoutSlot } from '~/components/inventory/LoadoutSlot'

export const Loadout: FC = () => (
  <div className='w-[28%] flex flex-col bgblur rounded-3xl border border-white border-opacity-20'>
    <div className='z-10 text-lg font-semibold px-6 py-4 rounded-t-3xl bg-blur-light shadow-lg'>
      Loadout
    </div>

    <div className='grid pt-4 px-8 pb-6 h-[32rem] grid-rows-inventory grid-cols-inventory gap-2'>
      <LoadoutSlot slot='hat' className='col-start-2' />
      <LoadoutSlot slot='head' className='col-start-2' />
      <LoadoutSlot slot='left-arm' className='col-start-1' />
      <LoadoutSlot slot='torso' />
      <LoadoutSlot slot='right-arm' />
      <LoadoutSlot slot='left-hand' />
      <LoadoutSlot slot='legs' />
      <LoadoutSlot slot='right-hand' />
      <LoadoutSlot slot='feet' className='col-start-2' />
    </div>
  </div>
)
