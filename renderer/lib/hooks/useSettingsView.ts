import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { createGlobalState } from 'react-hooks-global-state'

export const views = ['video', 'audio'] as const
export type SettingsView = typeof views[number]

export const viewNames: Record<SettingsView, string> = {
  video: 'Video',
  audio: 'Audio',
}

export function isView(view: string): view is SettingsView {
  // @ts-expect-error Type Assertation
  return views.includes(view)
}

interface GlobalState {
  lastView: SettingsView
}

const initialState: GlobalState = {
  lastView: 'video',
}

const { useGlobalState } = createGlobalState(initialState)

export const useLastView = () => {
  const [lastView, setLastView] = useGlobalState('lastView')
  return { lastView, setLastView }
}

export const useSettingsView = () => {
  const lastView = useLastView()
  const { query } = useRouter()

  const view = query.view
  if (typeof view === 'undefined') return { view: undefined, ...lastView }

  if (typeof view !== 'string') throw new Error('invalid settings view')
  if (!isView(view)) throw new Error('invalid settings view')

  return { view, ...lastView }
}
