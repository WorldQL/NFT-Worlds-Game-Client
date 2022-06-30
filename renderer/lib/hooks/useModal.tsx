import { useCallback, useState } from 'react'

export const useModal = (initialState = false) => {
  const [visible, setVisible] = useState<boolean>(initialState)
  const toggleVisible = useCallback(
    () => setVisible(!visible),
    [visible, setVisible]
  )

  return { visible, setVisible, toggleVisible }
}
