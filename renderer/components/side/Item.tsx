import { type FC, useMemo } from 'react'
import { WRLDIcon } from '~/components/svg/WRLDIcon'

// TODO: Match incoming data
export interface NFTItem {
  name: string
  image: string
  value: number
}

interface Props {
  item: NFTItem
}

export const Item: FC<Props> = ({ item: { name, image, value: rawValue } }) => {
  const value = useMemo<string>(() => rawValue.toLocaleString(), [rawValue])

  return (
    <div className='flex flex-col'>
      <img
        className='bg-neutral-900 p-4 rounded-xl aspect-square w-full'
        src={image}
        alt={name}
      />

      <div className='font-semibold mt-4'>{name}</div>

      <div className='flex items-center gap-2'>
        <WRLDIcon className='w-5 text-wrld drop-shadow-lg' />
        <span className='text-sm font-semibold'>{value}</span>
      </div>
    </div>
  )
}
