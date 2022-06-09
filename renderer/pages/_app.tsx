import type { AppProps } from 'next/app'
import React from 'react'
import 'tailwindcss/tailwind.css'
import { Titlebar } from '~/components/layout/Titlebar'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <Titlebar />
      <div className='w-full h-full bg-white rounded-b-window'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default App
