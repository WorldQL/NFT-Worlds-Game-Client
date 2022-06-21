import clsx from 'clsx'
import { type FC, useMemo } from 'react'
import { WorldHeader } from '~/components/layout/WorldHeader'
import { useCarousel } from '~/lib/hooks/useCarousel'
import { useWorlds } from '~/lib/hooks/useWorlds'

interface Props {
  count?: number
}

export const WorldHeaderCarousel: FC<Props> = ({ count = 3 }) => {
  const { worlds: allWorlds } = useWorlds()
  const worlds = useMemo(() => allWorlds?.slice(0, count), [allWorlds, count])
  const { index, transition, dispatch } = useCarousel(count, 251)

  if (worlds === undefined) return null

  return (
    <div className='[--translate:20px] [--duration:250ms] relative'>
      <WorldHeader
        world={worlds[index]}
        secondary='details'
        className={clsx('z-50', transition && 'opacity-0')}
      />

      {transition && (
        <WorldHeader
          world={worlds[index]}
          secondary='details'
          className={clsx(
            '-z-10 pointer-events-none transition-all duration-[var(--duration)] absolute top-0',
            !transition.start && 'opacity-0',
            transition.start && 'opacity-100',
            transition.direction === 'left' &&
              !transition.start &&
              'translate-x-[var(--translate)]',
            transition.direction === 'right' &&
              !transition.start &&
              '-translate-x-[var(--translate)]'
          )}
        />
      )}

      {transition && (
        <WorldHeader
          world={worlds[transition.index]}
          secondary='details'
          className={clsx(
            '-z-20 pointer-events-none transition-all duration-[var(--duration)] absolute top-0',
            transition.start && 'opacity-0',
            transition.direction === 'left' &&
              transition.start &&
              '-translate-x-[var(--translate)]',
            transition.direction === 'right' &&
              transition.start &&
              'translate-x-[var(--translate)]'
          )}
        />
      )}

      <button type='button' onClick={() => dispatch({ action: 'increment' })}>
        Increment
      </button>

      <button type='button' onClick={() => dispatch({ action: 'decrement' })}>
        Decrement
      </button>
    </div>
  )
}
