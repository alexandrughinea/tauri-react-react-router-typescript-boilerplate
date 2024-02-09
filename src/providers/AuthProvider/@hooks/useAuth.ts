import { useContext } from 'react'
import { AuthContext } from '../Auth.provider'

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useServices must be used within an ServicesProvicer')
    }
    return context
}
