import { type AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useCallback, useEffect } from 'react'
import { useKonami } from 'react-konami-code'
import { Titlebar } from '~/components/layout/Titlebar'
import { useLaunchEvents } from '~/lib/hooks/useLaunchEvents'

import '~/styles/globals.css'

const LaunchModal = dynamic(
  async () => {
    const m = await import('~/components/LaunchModal')
    return m.LaunchModal
  },
  {
    ssr: false,
  }
)

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Preload
    void import('@electron/remote')
  }, [])

  const handleKonami = useCallback(async () => {
    const { getCurrentWebContents } = await import('@electron/remote')
    const webContents = getCurrentWebContents()

    webContents.toggleDevTools()
  }, [])

  useKonami(handleKonami)
  const { launching, ...launchState } = useLaunchEvents()

  return (
    <div
      className='w-screen h-screen flex flex-col rounded-window overflow-hidden select-none'
      id='background'
    >
      <Titlebar />
      <div
        id='root'
        className='w-full flex-1 overflow-y-clip text-text rounded-b-window'
      >
        <LaunchModal visible={launching} {...launchState} />

        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default App
