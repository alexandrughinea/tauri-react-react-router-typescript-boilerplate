import { PageLayout } from '@/layouts'
import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export const LoginPage: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <PageLayout className="Login">
            <div style={{ textAlign: 'center', marginTop: 100 }}>
                <button onClick={() => navigate('/')}>Login</button>
            </div>
        </PageLayout>
    )
}
