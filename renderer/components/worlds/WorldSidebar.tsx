import { useRouter } from 'next/router'
import { type FC, useCallback } from 'react'
import { type World } from '~/lib/data/worlds'

interface Props {
  world: World
}

export const WorldSidebar: FC<Props> = ({ world }) => {
  const { push } = useRouter()
  const handleClick = useCallback(() => {
    void push(`/worlds/${world.id}`)
  }, [world.id, push])

  return (
    <div
      className='flex items-center gap-2 cursor-pointer'
      onClick={handleClick}
    >
      <img
        src={world.branding.icon}
        className='rounded-full aspect-square w-9 h-auto'
      />

      <div className='text-sm font-semibold'>{world.name}</div>
    </div>
  )
}
