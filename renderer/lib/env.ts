export interface Environment {
  isDev: boolean
}

let env: Environment | undefined
export const getEnv = async () => {
  if (env !== undefined) return env

  const { getGlobal } = await import('@electron/remote')
  env = getGlobal('env') as Environment

  return env
}
