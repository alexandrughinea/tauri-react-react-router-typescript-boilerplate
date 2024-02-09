import './Logo.css'
import logoVite from '@/assets/logo.svg'

export const Logo: React.FC = () => {
    return (
        <div className="Logo">
            <div className="Logo-Image">
                <img src={logoVite} width={64} height={64} />
            </div>
            <h3>{import.meta.env.VITE_APP_TITLE}</h3>
        </div>
    )
}
