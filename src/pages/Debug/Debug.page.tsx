import { PageLayout } from '@/layouts'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Store } from 'tauri-plugin-store-api'

async function testStorage() {
    const store = new Store('.settings.dat')

    await store.set('some-key', { value: 5 })

    const val = await store.get('some-key')
    console.log(val)
    await store.save() // this manually saves the store, otherwise the store is only saved when your app is closed
}

export const DebugPage: React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        // Test on mount
        testStorage()
    }, [])
    return (
        <PageLayout className="About">
            <button onClick={() => navigate('/')}>Go back</button>
            <pre>{JSON.stringify(import.meta.env)}</pre>
        </PageLayout>
    )
}
