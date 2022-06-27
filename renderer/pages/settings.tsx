import { type NextPage } from 'next'
import { useState } from 'react'
import { Layout } from '~/components/layout/Layout'
import { TitleHeader } from '~/components/layout/TitleHeader'
import { SettingsInput } from '~/components/ui/SettingsInput'

const Settings: NextPage = () => {
  const [bool, setBool] = useState<boolean>(false)

  return (
    <Layout>
      <TitleHeader>Settings</TitleHeader>
      <div className='flex flex-col w-full flex-grow mb-[var(--pad)] bgblur rounded-3xl'>
        <div className='px-8 py-4 rounded-t-3xl flex gap-8 bg-blur-1'>
          <span>Video</span>
          <span>Audio</span>
        </div>

        <div className='rounded-b-3xl p-8 flex-grow flex flex-col'>
          <SettingsInput
            name='Fullscreen'
            type='bool'
            value={bool}
            onChange={setBool}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Settings
