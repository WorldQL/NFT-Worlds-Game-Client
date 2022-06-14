import { safeStorage } from 'electron'
import isDev from 'electron-is-dev'
import Store from 'electron-store'
import { sync as mkdirpSync } from 'mkdirp'
import { nanoid } from 'nanoid'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { APP_ROOT, APP_ROOT_ABSOLUTE } from './env'

const ENCRYPT_IN_DEV = true
const KEY_LENGTH = 30

const generateKey = () => nanoid(KEY_LENGTH)
export const secureKey: (name: string) => string | undefined = name => {
  if (isDev && !ENCRYPT_IN_DEV) return undefined

  const canEncrypt = safeStorage.isEncryptionAvailable()
  if (!canEncrypt) return undefined

  mkdirpSync(APP_ROOT)
  const keyFile = join(APP_ROOT, `${name}.key`)

  const keyFileExists = existsSync(keyFile)
  if (!keyFileExists) {
    const key = generateKey()

    const encrypted = safeStorage.encryptString(key)
    writeFileSync(keyFile, encrypted)

    return key
  }

  const encrypted = readFileSync(keyFile)
  const key = safeStorage.decryptString(encrypted)

  return key
}

export function createStore<
  T extends Record<string, any> = Record<string, unknown>
>(name: string, secure = false): () => Store<T> {
  const keyname = `${name}.json`
  const key = secure ? secureKey(keyname) : undefined

  let store: Store<T> | undefined
  return () => {
    if (store === undefined) {
      store = new Store<T>({
        name,
        cwd: APP_ROOT_ABSOLUTE,
        fileExtension: key ? 'json.enc' : 'json',
        encryptionKey: key,
      })
    }

    return store
  }
}
