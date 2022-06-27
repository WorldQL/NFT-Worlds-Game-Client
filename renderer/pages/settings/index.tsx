import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useLastView } from '~/lib/hooks/useSettingsView'

const SettingsRedirect: NextPage = () => {
  const { replace } = useRouter()
  const { lastView } = useLastView()

  useEffect(() => {
    void replace(`/settings/${lastView}`)
  }, [lastView, replace])

  return null
}

export default SettingsRedirect
