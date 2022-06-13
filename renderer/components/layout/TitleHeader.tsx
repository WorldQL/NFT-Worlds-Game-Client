import { type FC, type PropsWithChildren } from 'react'

export const TitleHeader: FC<PropsWithChildren> = ({ children }) => (
  <h1 className='text-center text-[4.8rem] font-bold my-6'>{children}</h1>
)
