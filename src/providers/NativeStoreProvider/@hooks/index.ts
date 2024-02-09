import { useContext } from 'react'
import { NativeStoreContext } from '../NativeStore.provider.tsx'

export function useNativeStore() {
    const context = useContext(NativeStoreContext)
    if (!context) {
        throw new Error('`useNativeStore` must be used within an `NativeStoreProvider`')
    }
    return context
}
