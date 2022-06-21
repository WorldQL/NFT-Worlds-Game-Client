import { type FC, type Reducer, useMemo, useReducer } from 'react'
import { WorldHeader } from '~/components/layout/WorldHeader'
import { useWorlds } from '~/lib/hooks/useWorlds'

interface Props {
  count?: number
}

type Action =
  | { action: 'increment' }
  | { action: 'decrement' }
  | { action: 'set'; value: number }

export const WorldHeaderCarousel: FC<Props> = ({ count = 3 }) => {
  const { worlds: allWorlds } = useWorlds()
  const worlds = useMemo(() => allWorlds?.slice(0, count), [allWorlds, count])

  const [index, setIndex] = useReducer<Reducer<number, Action>>(
    (previousState, action) => {
      switch (action.action) {
        case 'increment': {
          return (previousState + 1) % count
        }

        case 'decrement': {
          return (previousState + count - 1) % count
        }

        case 'set': {
          return action.value % count
        }

        default:
          throw new Error('invalid action')
      }
    },
    0
  )

  if (worlds === undefined) return null
  return (
    <div>
      <WorldHeader world={worlds[index]} secondary='details' />

      <button type='button' onClick={() => setIndex({ action: 'increment' })}>
        Increment
      </button>

      <button type='button' onClick={() => setIndex({ action: 'decrement' })}>
        Decrement
      </button>
    </div>
  )
}
