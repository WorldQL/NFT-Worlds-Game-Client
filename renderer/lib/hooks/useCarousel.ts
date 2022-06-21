import { type Reducer, useEffect, useReducer } from 'react'

interface State {
  index: number
  transition: Transition | undefined
}

interface Transition {
  direction: 'left' | 'right'
  index: number
}

type Action =
  | { action: 'increment' }
  | { action: 'decrement' }
  | { action: 'setIdx'; value: number }
  | { action: 'end' }

export const useCarousel = (count: number, delay: number) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    (previousState, action) => {
      switch (action.action) {
        case 'increment': {
          if (previousState.transition !== undefined) {
            return previousState
          }

          const index = (previousState.index + 1) % count
          const transition: Transition = {
            direction: 'right',
            index: previousState.index,
          }

          return { ...previousState, index, transition }
        }

        case 'decrement': {
          if (previousState.transition !== undefined) {
            return previousState
          }

          const index = (previousState.index + count - 1) % count
          const transition: Transition = {
            direction: 'left',
            index: previousState.index,
          }

          return { ...previousState, index, transition }
        }

        case 'setIdx': {
          if (previousState.transition !== undefined) {
            return previousState
          }

          const index = action.value % count
          const transition: Transition = {
            // TODO: Calculate direction
            direction: 'left',
            index: previousState.index,
          }

          return { ...previousState, index, transition }
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

  useEffect(() => {
    if (state.transition === undefined) return
    const timeout = setTimeout(() => dispatch({ action: 'end' }), 1000)

    return () => clearTimeout(timeout)
  }, [state.transition])

  return { ...state, dispatch }
}
