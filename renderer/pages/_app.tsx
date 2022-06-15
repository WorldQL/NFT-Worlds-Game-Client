import type { AppProps } from 'next/app'
import React, { useCallback } from 'react'
import { useKonami } from 'react-konami-code'
import { Titlebar } from '~/components/layout/Titlebar'

import '~/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const handleKonami = useCallback(async () => {
    const { getCurrentWebContents } = await import('@electron/remote')
    const webContents = getCurrentWebContents()

    webContents.toggleDevTools()
  }, [])

  useKonami(handleKonami)

  return (
    <div
      className='w-screen h-screen flex flex-col rounded-window overflow-hidden select-none'
      id='background'
    >
      <Titlebar />
      <div className='w-full flex-1 overflow-y-clip text-text rounded-b-window'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default App
