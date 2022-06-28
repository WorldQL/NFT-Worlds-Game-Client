import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Layout } from '~/components/layout/Layout'
import { useLastView } from '~/lib/hooks/useSettingsView'

const SettingsRedirect: NextPage = () => {
  const { replace } = useRouter()
  const { lastView } = useLastView()

  useEffect(() => {
    void replace(`/settings/${lastView}`)
  }, [lastView, replace])

  return <Layout />
}

export default SettingsRedirect
