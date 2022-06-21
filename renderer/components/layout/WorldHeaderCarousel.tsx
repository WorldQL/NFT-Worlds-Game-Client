import clsx from 'clsx'
import { type FC, type Reducer, useEffect, useMemo, useReducer } from 'react'
import { WorldHeader } from '~/components/layout/WorldHeader'
import { useWorlds } from '~/lib/hooks/useWorlds'

interface Props {
  count?: number
}

interface State {
  index: number
  transition: 'left' | 'right' | undefined
}

type Action =
  | { action: 'increment' }
  | { action: 'decrement' }
  | { action: 'setIdx'; value: number }
  | { action: 'end' }

export const WorldHeaderCarousel: FC<Props> = ({ count = 3 }) => {
  const { worlds: allWorlds } = useWorlds()
  const worlds = useMemo(() => allWorlds?.slice(0, count), [allWorlds, count])

  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    (previousState, action) => {
      switch (action.action) {
        case 'increment': {
          if (previousState.transition !== undefined) {
            return previousState
          }

          const index = (previousState.index + 1) % count
          const transition = 'right'

          return { ...previousState, index, transition }
        }

        case 'decrement': {
          if (previousState.transition !== undefined) {
            return previousState
          }

          const index = (previousState.index + count - 1) % count
          const transition = 'left'

          return { ...previousState, index, transition }
        }

        case 'setIdx': {
          if (previousState.transition !== undefined) {
            return previousState
          }

          const index = action.value % count
          // TODO: Calculate Transition

          return { ...previousState, index }
        }

        case 'end': {
          return { ...previousState, transition: undefined }
        }

        default:
          throw new Error('invalid action')
      }
    },
    { index: 0, transition: undefined }
  )

  const { index, transition } = state
  useEffect(() => {
    if (transition === undefined) return
    const timeout = setTimeout(() => dispatch({ action: 'end' }), 1000)

    return () => clearTimeout(timeout)
  }, [transition])

  if (worlds === undefined) return null

  return (
    <div className='relative'>
      <WorldHeader
        world={worlds[index]}
        secondary='details'
        className={clsx('transition-transform')}
      />

      <WorldHeader
        world={worlds[index]}
        secondary='details'
        className={clsx('transition-transform absolute top-0')}
      />

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
