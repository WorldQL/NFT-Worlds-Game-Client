import type { AppProps } from 'next/app'
import React from 'react'
import { Titlebar } from '~/components/layout/Titlebar'
import '~/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='w-screen h-screen flex flex-col rounded-window overflow-hidden'>
      <Titlebar />
      <div className='w-full h-full bg-neutral-900 text-text rounded-b-window'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default App
