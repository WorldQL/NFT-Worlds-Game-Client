import { type FC } from 'react'

export const Loadout: FC = () => (
  <div className='w-[28%] flex flex-col bgblur rounded-3xl border border-white border-opacity-20'>
    <div className='z-10 text-lg font-semibold px-6 py-4 rounded-t-3xl bg-blur-light shadow-lg'>
      Loadout
    </div>

    <div className='grid pt-4 px-8 pb-6 h-[32rem] grid-rows-inventory grid-cols-inventory gap-2'>
      <div className='bg-red-300 col-start-2'>HAT</div>
      <div className='bg-orange-300 col-start-2'>HEAD</div>
      <div className='bg-yellow-300 col-start-1'>LEFT ARM</div>
      <div className='bg-green-300'>TORSO</div>
      <div className='bg-blue-300'>RIGHT ARM</div>
      <div className='bg-indigo-300'>LEFT HAND</div>
      <div className='bg-violet-300'>LEGS</div>
      <div className='bg-pink-300'>RIGHT HAND</div>
      <div className='bg-gray-300 col-start-2'>FEET</div>
    </div>
  </div>
)
