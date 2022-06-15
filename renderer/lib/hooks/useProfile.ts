import { type AxiosError } from 'axios'
import ms from 'ms'
import useSWR from 'swr'
import { getProfile, type Profile } from '~/lib/data/profile'

export const useProfile = () => {
  const { data: profile, error } = useSWR<Profile, AxiosError>(
    '/profile',
    getProfile,
    {
      refreshInterval: ms('30s'),
    }
  )

  const loading = !profile && !error
  return { profile, loading, error }
}

export { type Profile } from '~/lib/data/profile'
