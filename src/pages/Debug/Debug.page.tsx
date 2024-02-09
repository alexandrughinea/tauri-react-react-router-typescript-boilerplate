import { PageLayout } from '@/layouts'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useNativeStore } from '@/providers'

export const DebugPage: React.FC = () => {
    const navigate = useNavigate()
    const nativeStore = useNativeStore()
    const [storageValue, setStorageValue] = useState(null)

    useEffect(() => {
        nativeStore.onGetItem('test').then((value) => setStorageValue(value))
    }, [nativeStore])

    return (
        <PageLayout className="About">
            <button onClick={() => navigate('/dashboard')}>Go back</button>
            <button onClick={() => nativeStore.onSetItem('test', { value: new Date().valueOf() })}>
                Save new storage value
            </button>
            <button onClick={() => nativeStore.onGetItem('test').then((value) => setStorageValue(value))}>
                Get storage value
            </button>
            <pre>env: {JSON.stringify(import.meta.env)}</pre>
            <hr />
            <pre>NativeStore: {JSON.stringify(storageValue)}</pre>
        </PageLayout>
    )
}
