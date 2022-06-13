import { type NextPage } from 'next'
import React from 'react'
import { Layout } from '~/components/layout/Layout'
import { TitleHeader } from '~/components/layout/TitleHeader'

const Settings: NextPage = () => (
  <Layout>
    <TitleHeader>Settings</TitleHeader>
    <div className='flex flex-col w-full flex-grow mb-[var(--pad)]'>
      <div className='px-8 py-4 rounded-t-3xl flex gap-8 bg-blur-2 backdrop-blur-[var(--blur-amount)]'>
        <span>Video</span>
        <span>Audio</span>
      </div>

      <div className='rounded-b-3xl p-8 bg-blur-1 flex-grow'>settings</div>
    </div>
  </Layout>
)

export default Settings
