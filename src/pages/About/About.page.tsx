import { PageLayout } from '@/layouts'
import { useLocation, useNavigate } from 'react-router'
import React from 'react'

export const AboutPage: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <PageLayout className="About">
            <button onClick={() => navigate('/dashboard')}>Go back</button>
            <div>Counter state {location.state?.count}</div>
        </PageLayout>
    )
}
