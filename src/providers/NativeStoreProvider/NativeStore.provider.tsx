import React, { createContext, PropsWithChildren, useCallback } from 'react'
import { IsTauriEnv } from '@/utils'
import { useServices } from '@/providers'
import { NativeStoreService } from '@/@core-lib'
import { isNil, isObjectLike } from 'lodash'

type NativeStoreContextValue = {
    onSetItem: typeof NativeStoreService.prototype.setItem
    onGetItem: typeof NativeStoreService.prototype.getItem
    onRemoveItem: typeof NativeStoreService.prototype.removeItem
    onClear: typeof NativeStoreService.prototype.clear
    onGetStorage(): typeof NativeStoreService.prototype.store
}

export const NativeStoreContext = createContext<NativeStoreContextValue>(Object.create(null))

export const NativeStoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const { nativeStoreService } = useServices()
    const onSetItem = useCallback(
        async (key: string, value: any) => {
            if (IsTauriEnv()) {
                await nativeStoreService.setItem(key, value)
            } else {
                const transformedValue = isObjectLike(value) ? globalThis.JSON.stringify(value) : value
                globalThis.localStorage.setItem(key, transformedValue)
            }
        },
        [nativeStoreService]
    )
    const onGetItem = useCallback(
        async (key: string) => {
            if (IsTauriEnv()) {
                return await nativeStoreService.getItem(key)
            } else {
                const value = globalThis.localStorage.getItem(key)
                return isNil(value) ? value : globalThis.JSON.parse(value)
            }
        },
        [nativeStoreService]
    )
    const onRemoveItem = useCallback(
        async (key: string) => {
            if (IsTauriEnv()) {
                await nativeStoreService.removeItem(key)
            } else {
                globalThis.localStorage.removeItem(key)
            }
        },
        [nativeStoreService]
    )
    const onClear = useCallback(async () => {
        if (IsTauriEnv()) {
            await nativeStoreService.clear()
        } else {
            globalThis.localStorage.clear()
        }
    }, [nativeStoreService])
    const onGetStorage = useCallback(() => {
        return nativeStoreService.store
    }, [nativeStoreService])

    return (
        <NativeStoreContext.Provider
            value={{
                onSetItem,
                onGetItem,
                onRemoveItem,
                onClear,
                onGetStorage
            }}>
            {children}
        </NativeStoreContext.Provider>
    )
}
