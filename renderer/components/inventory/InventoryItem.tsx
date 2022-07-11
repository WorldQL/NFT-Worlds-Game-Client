import { clsx } from 'clsx'
import { type FC } from 'react'

interface Props {
  name: string
  image: string
  description: string
}

export const InventoryItem: FC<Props> = ({ name, image, description }) => (
  <div className='relative group flex flex-col cursor-pointer'>
    <img
      className={clsx(
        'bg-black p-8 rounded-xl',
        'aspect-square w-full',
        'transition-all group-hover:ring ring-item-stroke'
      )}
      src={image}
      alt={name}
    />

    <div className='font-semibold mt-2'>{name}</div>

    <div
      className={clsx(
        'absolute top-0 left-0',
        'w-full height-auto aspect-square',
        'rounded-xl bg-black bg-opacity-50',
        'transition-opacity opacity-0 group-hover:opacity-100',
        'flex items-end'
      )}
    >
      <button
        type='button'
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      >
        Equip
      </button>

      <span className='px-5 py-4 text-sm text-neutral-200 font-light line-clamp-4'>
        {description}
      </span>
    </div>
  </div>
)
