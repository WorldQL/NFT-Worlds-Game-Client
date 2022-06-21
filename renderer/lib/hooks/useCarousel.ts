import { type Reducer, useEffect, useReducer } from 'react'
import { flushSync } from 'react-dom'

interface State {
  index: number
  transition: Transition | undefined
}

interface Transition {
  start: boolean
  direction: 'left' | 'right'
  index: number
}

type Action =
  | { action: 'increment' }
  | { action: 'decrement' }
  | { action: 'setIdx'; value: number }
  | { action: 'start' }
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
            start: false,
            direction: 'left',
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
            start: false,
            direction: 'right',
            index: previousState.index,
          }

          return { ...previousState, index, transition }
        }

        case 'setIdx': {
          if (previousState.transition !== undefined) {
            return previousState
          }

          if (previousState.index === action.value) {
            return previousState
          }

          const index = action.value % count
          const transition: Transition = {
            start: false,
            // TODO: Calculate direction
            direction: 'left',
            index: previousState.index,
          }

          return { ...previousState, index, transition }
        }

        case 'start': {
          if (previousState.transition === undefined) {
            return previousState
          }

          return {
            ...previousState,
            transition: { ...previousState.transition, start: true },
          }
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
    if (state.transition.start === true) return

    setImmediate(() =>
      flushSync(() => {
        dispatch({ action: 'start' })
      })
    )
  }, [state.transition])

  useEffect(() => {
    if (state.transition === undefined) return
    if (state.transition.start === false) return

    const timeout = setTimeout(() => {
      dispatch({ action: 'end' })
    }, delay)

    return () => clearTimeout(timeout)
  }, [state.transition, delay])

  return { ...state, dispatch }
}
