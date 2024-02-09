import { Store } from 'tauri-plugin-store-api'

export class NativeStoreService {
    readonly store: Store

    constructor() {
        this.store = new Store(import.meta.env.VITE_APP_STORAGE_FILE)
    }

    async setItem(key: string, value: unknown) {
        if (!key) {
            return
        }

        try {
            await this.store.set(key, value)
            await this.store.save() // this manually saves the store, otherwise the store is only saved when your app is closed
        } catch (error) {
            /* Error */
        }
    }

    async removeItem(key: string) {
        try {
            await this.store.delete(key)
        } catch (error) {
            /* Error */
        }
    }

    async getItem(key: string) {
        let value = null
        try {
            value = await this.store.get(key)
        } catch (error) {
            /* Error */
        }

        return value
    }

    async clear() {
        try {
            await this.store.reset()
        } catch (error) {
            /* Error */
        }
    }
}
