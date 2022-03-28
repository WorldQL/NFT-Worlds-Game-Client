import React, { type FC, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { useStore } from './hooks/useStore'
import { init } from './state/init'
import { Launch } from './views/Launch'
import { Login } from './views/Login'

const GlobalStyles = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    background-color: #111;
    font-family: 'Montserrat';
  }

  #app {
    --padding: 32px;

    width: calc(100vw - var(--padding));
    height: calc(100vh - var(--padding));
  }
`

export const App: FC = () => {
  const { state, dispatch } = useStore()

  useEffect(() => {
    // Initialise the store
    void init(state, dispatch)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  )
}

const Router: FC = () => {
  const { state } = useStore()

  // TODO: Ensure each state has a valid view
  switch (state.status) {
    case 'init':
      return null

    case 'authenticating':
      return <Login />

    case 'gameRunning':
      return <div>Game Running!</div>

    case 'idle':
      if (!state.user) return <Login />
      return <Launch />

    default:
      throw new Error('Unhandled status!')
  }
}
