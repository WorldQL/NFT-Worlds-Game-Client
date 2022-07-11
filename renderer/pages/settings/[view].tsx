import { type NextPage } from 'next'
import { type FC, useEffect, useState } from 'react'
import { Card } from '~/components/layout/Card'
import { Layout } from '~/components/layout/Layout'
import { TitleHeader } from '~/components/layout/TitleHeader'
import { Divider } from '~/components/settings/Divider'
import { SettingsColumn } from '~/components/settings/SettingsColumn'
import { SettingsContainer } from '~/components/settings/SettingsContainer'
import { SettingsNav } from '~/components/settings/SettingsNav'
import { SettingsNavItem } from '~/components/settings/SettingsNavItem'
import { SettingsInput } from '~/components/ui/SettingsInput'
import { Slider } from '~/components/ui/Slider'
import { useSettingsView, viewNames } from '~/lib/hooks/useSettingsView'

const Settings: NextPage = () => {
  const { view, setLastView } = useSettingsView()
  useEffect(() => view && setLastView(view), [view, setLastView])

  return (
    <Layout>
      <TitleHeader>Settings</TitleHeader>

      <Card className='w-full flex-grow mb-[var(--pad)]'>
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
      </Card>
    </Layout>
  )
}

const VideoSettings: FC = () => {
  const [bool, setBool] = useState<boolean>(false)
  const [number, setNumber] = useState<number>(15)

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
        <Slider
          min={12}
          max={25}
          value={number}
          step='any'
          onChange={setNumber}
        />
      </SettingsColumn>
    </SettingsContainer>
  )
}

export default Settings
