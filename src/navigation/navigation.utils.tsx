import React, { useEffect } from 'react'
import { JSX } from 'react/jsx-runtime'
import { useLocation, useNavigate } from 'react-router'
import { useAuth } from '@/providers'

export function withAuth<T>(Component: React.FC<T>) {
    return (props: JSX.IntrinsicAttributes & T) => {
        const navigate = useNavigate()
        const { isAuthenticated } = useAuth()

        useEffect(() => {
            if (isAuthenticated) {
                navigate('/dashboard')
            } else {
                navigate('/account/login')
            }
        }, [isAuthenticated, navigate])

        return <Component {...props} />
    }
}
