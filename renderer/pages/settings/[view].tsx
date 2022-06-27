import { type NextPage } from 'next'
import { type FC, useEffect, useState } from 'react'
import { Layout } from '~/components/layout/Layout'
import { TitleHeader } from '~/components/layout/TitleHeader'
import { Divider } from '~/components/settings/Divider'
import { SettingsColumn } from '~/components/settings/SettingsColumn'
import { SettingsContainer } from '~/components/settings/SettingsContainer'
import { SettingsNav } from '~/components/settings/SettingsNav'
import { SettingsNavItem } from '~/components/settings/SettingsNavItem'
import { SettingsInput } from '~/components/ui/SettingsInput'
import { useSettingsView, viewNames } from '~/lib/hooks/useSettingsView'

const Settings: NextPage = () => {
  const { view, setLastView } = useSettingsView()
  useEffect(() => view && setLastView(view), [view, setLastView])

  return (
    <Layout>
      <TitleHeader>Settings</TitleHeader>
      <div className='flex flex-col w-full flex-grow mb-[var(--pad)] bgblur rounded-3xl'>
        <SettingsNav>
          {Object.entries(viewNames).map(([id, name]) => (
            <SettingsNavItem
              key={id}
              id={id}
              name={name}
              active={id === view}
            />
          ))}
        </SettingsNav>

        {view === 'video' && <VideoSettings />}

        {/* <div className='rounded-b-3xl p-8 flex-grow flex flex-col'>
          <SettingsInput
            name='Fullscreen'
            type='bool'
            value={bool}
            onChange={setBool}
          />
        </div> */}
      </div>
    </Layout>
  )
}

const VideoSettings: FC = () => {
  const [bool, setBool] = useState<boolean>(false)

  return (
    <SettingsContainer>
      <SettingsColumn>
        <SettingsInput
          name='Fullscreen'
          type='bool'
          value={bool}
          onChange={setBool}
        />
      </SettingsColumn>

      <Divider />

      <SettingsColumn>
        <SettingsInput
          name='Fullscreen'
          type='bool'
          value={bool}
          onChange={setBool}
        />
      </SettingsColumn>
    </SettingsContainer>
  )
}

export default Settings
