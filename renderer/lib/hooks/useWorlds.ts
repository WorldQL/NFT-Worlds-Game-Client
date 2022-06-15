import { type AxiosError } from 'axios'
import useSWR from 'swr'
import { fetchWorlds, type World } from '~/lib/data/worlds'

type Result = Awaited<ReturnType<typeof fetchWorlds>>
export const useWorlds = () => {
  const { data: worlds, error } = useSWR<Result, AxiosError>(
    '/nftw/worlds',
    fetchWorlds
  )

  const loading = !worlds && !error
  return { worlds, loading, error }
}

export { type World } from '~/lib/data/worlds'
