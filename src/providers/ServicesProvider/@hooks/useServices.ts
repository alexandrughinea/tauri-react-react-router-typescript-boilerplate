import { useContext } from 'react'
import { ServicesContext } from '../'

export function useServices() {
    const context = useContext(ServicesContext)

    if (!context) {
        throw new Error('useServices must be used within an ServicesProvider')
    }
    return context
}
