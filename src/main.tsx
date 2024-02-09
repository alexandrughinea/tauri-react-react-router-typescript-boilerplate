import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Navigate, Outlet, RouterProvider } from 'react-router'
import { createHashRouter } from 'react-router-dom'
import { MainLayout } from '@/layouts'
import { AboutPage, DebugPage, HomePage, LoginPage } from '@/pages'
import { Titlebar } from './components/Titlebar'

const router = createHashRouter([
    {
        path: '/account',
        element: (
            <>
                <Outlet />
            </>
        ),
        children: [
            {
                index: true,
                element: <Navigate replace={true} to="login" />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'error',
                element: <>Login error</>
            },
            {
                path: '*',
                element: <>Not found</>
            }
        ]
    },
    { index: true, element: <Navigate replace={true} to="/home" /> },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/home', element: <HomePage /> },
            { path: '/about', element: <AboutPage /> },
            { path: '/debug', element: <DebugPage /> },
            {
                path: '*',
                element: <>Not found</>
            }
        ]
    }
])

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Titlebar />
        <RouterProvider router={router} />
    </React.StrictMode>
)
