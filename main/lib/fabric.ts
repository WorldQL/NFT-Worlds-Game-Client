import { join } from 'node:path'
import { downloadCachedAsset } from './http'

export const downloadFabric = async (root: string, version: string) => {
  const LOADER_VERSION = '0.14.8'
  const url = `https://meta.fabricmc.net/v2/versions/loader/${version}/${LOADER_VERSION}/profile/json`

  const launcherID = `${version}-fabric-${LOADER_VERSION}`
  const dir = join(root, 'versions', launcherID)

  await downloadCachedAsset(dir, url, undefined, `${launcherID}.json`)
  return launcherID
}
