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
  const { index, transition, dispatch } = useCarousel(count, 1000)

  if (worlds === undefined) return null

  return (
    <div className='relative'>
      <WorldHeader
        world={worlds[index]}
        secondary='details'
        className={clsx('transition-transform')}
      />

      {transition && (
        <WorldHeader
          world={worlds[index]}
          secondary='details'
          className={clsx('transition-transform absolute top-0')}
        />
      )}

      <pre>{JSON.stringify({ transition })}</pre>

      <button type='button' onClick={() => dispatch({ action: 'increment' })}>
        Increment
      </button>

      <button type='button' onClick={() => dispatch({ action: 'decrement' })}>
        Decrement
      </button>
    </div>
  )
}
