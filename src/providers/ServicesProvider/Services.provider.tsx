import React, { createContext, PropsWithChildren, useMemo } from 'react'
import { AuthService, NativeStoreService } from '@/@core-lib'

type ServicesContextValue = {
    authService: AuthService
    nativeStoreService: NativeStoreService
}

export const ServicesContext = createContext<ServicesContextValue>(Object.create(null))

export const ServicesProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const services = useMemo(() => {
        return {
            authService: new AuthService(),
            nativeStoreService: new NativeStoreService()
            // ... rest of services here
        }
    }, [])

    return <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>
}
