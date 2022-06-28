import clsx from 'clsx'
import { useRouter } from 'next/router'
import { type FC, useCallback } from 'react'

interface Props {
  id: string
  name: string
  active: boolean
}

export const SettingsNavItem: FC<Props> = ({ id, name, active }) => {
  const { push } = useRouter()
  const handleClick = useCallback(() => {
    void push(`/settings/${id}`)
  }, [id, push])

  return (
    <span
      className={clsx(
        'cursor-pointer transition-opacity',
        !active && 'opacity-50'
      )}
      onClick={handleClick}
    >
      {name}
    </span>
  )
}
