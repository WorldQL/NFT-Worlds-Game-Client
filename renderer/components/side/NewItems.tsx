import { type FC } from 'react'
import { Item, type NFTItem } from '~/components/side/Item'
import { SideContent } from '~/components/side/SideContent'

interface Props {
  items: readonly NFTItem[]
}

export const NewItems: FC<Props> = ({ items }) => {
  if (items.length === 0) return null
  const item = items[0]

  return (
    <SideContent className='flex flex-col gap-4'>
      <h2 className='font-semibold'>New Items</h2>

      <Item item={item} />
    </SideContent>
  )
}
