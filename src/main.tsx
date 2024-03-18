import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { createHashRouter } from 'react-router-dom'
import { Titlebar } from '@/components'
import { navigationRoutes } from '@/navigation'
import { AuthProvider, NativeStoreProvider, ServicesProvider } from '@/providers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createHashRouter(navigationRoutes)
const container = document.getElementById('root') as HTMLElement
const queryClient = new QueryClient()

createRoot(container).render(
    <React.StrictMode>
        <Titlebar />
        <ServicesProvider>
            <QueryClientProvider client={queryClient}>
                <NativeStoreProvider>
                    <AuthProvider>
                        <RouterProvider router={router} />
                    </AuthProvider>
                </NativeStoreProvider>
            </QueryClientProvider>
        </ServicesProvider>
    </React.StrictMode>
)
