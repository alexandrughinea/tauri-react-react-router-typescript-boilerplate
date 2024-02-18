import { PageLayout } from '@/layouts'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useNativeStore } from '@/providers'
import { SocketIOClient } from '@/components'

const EXAMPLE_STORAGE_KEY = 'test'

export const DebugPage: React.FC = () => {
    const navigate = useNavigate()
    const nativeStore = useNativeStore()
    const [storageValue, setStorageValue] = useState(null)
    const [count, setCount] = useState(0)
    const onEnableWS = useCallback(() => {
        fetch(`${import.meta.env.VITE_APP_API}/clients`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                client_id: `FAKE_CLIENT_ID:${import.meta.env.VITE_APP_TITLE}`
            })
        })
            .then((response) => response.text())
            .then((response) => setCount(Number(0)))
    }, [])

    useEffect(() => {
        nativeStore.onGetItem(EXAMPLE_STORAGE_KEY).then((value) => setStorageValue(value))
    }, [nativeStore])

    return (
        <PageLayout className="Debug">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <button onClick={() => navigate('/dashboard')}>Go back</button>
                <button onClick={() => nativeStore.onSetItem(EXAMPLE_STORAGE_KEY, { value: new Date().valueOf() })}>
                    Set new storage value
                </button>
                <button
                    onClick={() => nativeStore.onGetItem(EXAMPLE_STORAGE_KEY).then((value) => setStorageValue(value))}>
                    Get storage value
                </button>
                <button onClick={onEnableWS}>SocketIO count ({count})</button>
            </div>
            <pre>env: {JSON.stringify(import.meta.env)}</pre>
            <hr />
            <pre>NativeStore: {JSON.stringify(storageValue)}</pre>
            <hr />
            <SocketIOClient />
        </PageLayout>
    )
}
