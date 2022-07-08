import { type FC, type PropsWithChildren } from 'react'

export const LoadoutContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className='w-full flex mt-8'>{children}</div>
)
