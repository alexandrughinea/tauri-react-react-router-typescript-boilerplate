import './Login.page.css'
import { PageLayout } from '@/layouts'
import React, { useCallback } from 'react'
import { useAuth } from '@/providers'

export const LoginPage: React.FC = () => {
    const { login } = useAuth()
    const onSubmit = useCallback(() => {
        login({
            username: 'User data',
            password: 'Password data'
        })
    }, [login])

    return (
        <PageLayout className="Login">
            <div className="Login-Form">
                <button onClick={onSubmit}>Login</button>
            </div>
            <video
                className="Login-Video"
                muted={true}
                autoPlay={true}
                loop={true}
                src={'/login.mp4'}
                style={{
                    borderRadius: `${import.meta.env.VITE_APP_BORDER_RADIUS}px`
                }}
            />
        </PageLayout>
    )
}
