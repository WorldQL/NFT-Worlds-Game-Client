import { type FC, type PropsWithChildren } from 'react'

export const TitleHeader: FC<PropsWithChildren> = ({ children }) => (
  <h1 className='text-center text-[4.8rem] font-bold mt-5 mb-7'>{children}</h1>
)
