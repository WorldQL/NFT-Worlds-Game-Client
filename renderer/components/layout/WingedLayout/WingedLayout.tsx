import { FC, PropsWithChildren } from 'react'

export const WingedLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className='flex mt-14'>{children}</div>
)
