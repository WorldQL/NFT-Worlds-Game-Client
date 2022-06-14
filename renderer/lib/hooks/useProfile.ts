import { type AxiosError } from 'axios'
import useSWR from 'swr'
import { getProfile, type ProfileReply } from '~/lib/data/profile'

export const useProfile = () => {
  const { data: profile, error } = useSWR<ProfileReply, AxiosError>(
    '/profile',
    getProfile
  )

  const loading = !profile && !error
  return { profile, loading, error }
}

export { type ProfileReply } from '~/lib/data/profile'
