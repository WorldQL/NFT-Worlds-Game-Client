import clsx from 'clsx'
import { type FC, type PropsWithChildren } from 'react'
import { Navbar } from './Navbar'

interface Props {
  scroll?: boolean
}

export const Layout: FC<PropsWithChildren<Props>> = ({ scroll, children }) => (
  <div className='h-full flex flex-col mx-[var(--pad)]'>
    <Navbar />

    <div
      className={clsx(
        'flex-1 flex flex-col',
        !scroll && 'overflow-y-clip',
        scroll && 'overflow-y-scroll pb-6 scrollbar-none'
      )}
    >
      {children}
    </div>
  </div>
)
