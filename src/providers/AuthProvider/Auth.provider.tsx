import React, { createContext, PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { useMutationLogin, useMutationLogout } from '@/@hooks'
import { LoginData } from '@/@core-lib'
import { useNativeStore } from '@/providers'

const TOKEN_STORAGE_KEY = 'token'

export const AuthContext = createContext(Object.create(null))

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const nativeStore = useNativeStore()
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const mutationLogin = useMutationLogin({
        onSuccess() {
            nativeStore.onSetItem(TOKEN_STORAGE_KEY, '12345').then(() => setIsAuthenticated(true))
        }
    })
    const mutationLogout = useMutationLogout({
        onSuccess() {
            nativeStore.onRemoveItem(TOKEN_STORAGE_KEY).then(() => setIsAuthenticated(false))
        }
    })
    const login = useCallback(
        (data: LoginData) => {
            mutationLogin.mutate(data)
        },
        [mutationLogin]
    )
    const logout = useCallback(() => {
        mutationLogout.mutate()
    }, [mutationLogout])

    useEffect(() => {
        nativeStore.onGetItem(TOKEN_STORAGE_KEY).then((response) => setIsAuthenticated(response as never))
    }, [nativeStore])

    return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}
