import { PageLayout } from '@/layouts'
import { useLocation, useNavigate } from 'react-router'

export const AboutPage: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <PageLayout className="About">
            <button onClick={() => navigate('/')}>Go back</button>
            <div>Counter state {location.state?.count}</div>
        </PageLayout>
    )
}
