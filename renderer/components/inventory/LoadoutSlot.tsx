import { clsx } from 'clsx'
import { type CSSProperties, type FC, useMemo } from 'react'
import Background from '~/assets/images/background.png'
import { ItemSelect } from '~/components/svg/ItemSelect'

export type Slot =
  | 'hat'
  | 'head'
  | 'left-arm'
  | 'torso'
  | 'right-arm'
  | 'left-hand'
  | 'legs'
  | 'right-hand'
  | 'feet'

interface Props {
  slot: Slot
  image?: string

  className?: string
  style?: CSSProperties
}

export const LoadoutSlot: FC<Props> = ({ slot, image, className, style }) => {
  const label = useMemo<string>(
    () => slot.replaceAll('-', '\n').toUpperCase(),
    [slot]
  )

  return (
    <div
      className={clsx(
        'relative rounded cursor-pointer',
        'bg-black bg-opacity-70',
        'border border-white border-opacity-20',
        'flex items-center justify-center',
        className
      )}
      style={style}
    >
      <div
        className={clsx(
          'absolute top-1 left-1 px-[4px] py-[0px]',
          'text-[0.65rem] font-light whitespace-pre',
          'bg-black rounded pointer-events-none'
        )}
      >
        {label}
      </div>

      {image ? (
        <img src={image} className='w-full h-full rounded object-cover' />
      ) : (
        <ItemSelect className='opacity-30' />
      )}
    </div>
  )
}
