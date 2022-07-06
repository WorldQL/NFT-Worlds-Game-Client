import { clsx } from 'clsx'
import { type FC, type PropsWithChildren, useEffect, useRef } from 'react'
import { createGlobalState } from 'react-hooks-global-state'
import { Navbar } from './Navbar'

interface Props {
  scroll?: boolean
}

interface GlobalState {
  pad: number
}

const initialState: GlobalState = {
  pad: 0,
}

const { useGlobalState } = createGlobalState(initialState)
export { useGlobalState }

export const Layout: FC<PropsWithChildren<Props>> = ({ scroll, children }) => {
  const navRef = useRef<HTMLElement>(null)
  const [pad, setPad] = useGlobalState('pad')

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const style = getComputedStyle(nav)
    const height = nav.offsetHeight
    const margin = Number.parseInt(style.marginTop, 10)

    setPad(height + margin)
  }, [setPad])

  return (
    <div className='relative h-full flex flex-col mx-[var(--pad)]'>
      <Navbar ref={navRef} />

      <div
        style={{ paddingTop: `${pad}px` }}
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
