import axios from 'axios'
import mkdirp from 'mkdirp'
import { type Buffer } from 'node:buffer'
import { createHash } from 'node:crypto'
import { type PathLike } from 'node:fs'
import { access, writeFile } from 'node:fs/promises'
import { join as joinPath, parse } from 'node:path'

export const exists = async (path: PathLike) => {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

export const downloadCachedAsset = async (
  directory: string,
  url: string,
  sha1: string | undefined,
  filename?: string
) => {
  await mkdirp(directory)

  const { base } = parse(decodeURIComponent(url))
  const filepath = joinPath(directory, filename ?? base)

  const fileExists = await exists(filepath)
  if (fileExists) return filepath

  const { data } = await axios.get<Buffer>(url, { responseType: 'arraybuffer' })

  if (sha1 !== undefined) {
    const hash = createHash('sha1')
    hash.update(data)

    const digest = hash.digest('hex')
    if (sha1 !== digest) {
      throw new Error(
        `hash mismatch for ${url}\nexpected: ${sha1}\nactual: ${digest}`
      )
    }
  }

  await writeFile(filepath, data)
  return filepath
}
