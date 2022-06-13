import {
  errorCheck,
  fastLaunch,
  profile as Profile,
  refresh,
  validate,
} from 'msmc'
import { authorize } from './nftWorldsAPI'
import { createStore } from './store'

interface Store {
  profile: Profile | undefined
}

export const authenticate = async () => {
  const store = createStore<Store>('user', true)

  const savedProfile = store.get('profile', undefined)
  const refreshProfile: () => Promise<{
    token: string
    profile: Profile
  }> = async () => {
    if (savedProfile === undefined) {
      const result = await fastLaunch('electron')
      if (errorCheck(result)) {
        throw new Error(result.reason)
      }

      const token = result.access_token!
      const profile = result.profile!

      return { token, profile }
    }

    const valid = validate(savedProfile)
    if (valid) {
      // @ts-expect-error Untyped Property
      const token = savedProfile._msmc.mcToken as string
      return { token, profile: savedProfile }
    }

    const result = await refresh(savedProfile)
    if (errorCheck(result)) {
      throw new Error(result.reason)
    }

    const token = result.access_token!
    const profile = result.profile!

    return { token, profile }
  }

  const { token, profile } = await refreshProfile()
  store.set('profile', profile)

  const nftwToken = await authorize(token)
  return { profile, nftwToken }
}
