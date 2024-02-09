import { Navigate } from 'react-router'
import { AboutPage, DebugPage, DashboardPage, LoginPage } from '@/pages'
import { MainLayout, PublicLayout } from '@/layouts'
import React from 'react'
import { withAuth } from './navigation.utils.tsx'

const MainLayoutWithAuth = withAuth(MainLayout)
const PublicLayoutWithAuth = withAuth(PublicLayout)

export const navigationRoutes = [
    {
        path: '/account',
        element: <PublicLayoutWithAuth />,
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
    {
        path: '/',
        element: <MainLayoutWithAuth />,
        children: [
            { index: true, element: <Navigate replace={true} to="dashboard" /> },
            { path: 'dashboard', element: <DashboardPage /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'debug', element: <DebugPage /> },
            {
                path: '*',
                element: <>Not found</>
            }
        ]
    }
]
