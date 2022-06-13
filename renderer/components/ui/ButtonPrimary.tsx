import { type FC, type PropsWithChildren, useCallback } from 'react'

interface Props {
  onClick: () => void
}

export const ButtonPrimary: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    if (typeof onClick === 'function') onClick()
  }, [onClick])

  // TODO: Styling
  return (
    <button type='button' onClick={handleClick}>
      {children}
    </button>
  )
}
