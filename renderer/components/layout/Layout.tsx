import clsx from 'clsx'
import { type FC, type PropsWithChildren, useEffect, useRef } from 'react'
import { Navbar } from './Navbar'

interface Props {
  scroll?: boolean
}

export const Layout: FC<PropsWithChildren<Props>> = ({ scroll, children }) => {
  const navRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const nav = navRef.current
    const content = contentRef.current

    if (!nav) return
    if (!content) return

    const style = getComputedStyle(nav)
    const height = nav.offsetHeight
    const margin = Number.parseInt(style.marginTop, 10)

    content.style.paddingTop = `${height + margin}px`
  }, [])

  return (
    <div className='relative h-full flex flex-col mx-[var(--pad)]'>
      <Navbar ref={navRef} />

      <div
        ref={contentRef}
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
}
