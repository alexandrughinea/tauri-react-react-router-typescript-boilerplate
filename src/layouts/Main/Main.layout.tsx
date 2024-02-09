import './Main.layout.css'
import { Outlet } from 'react-router'
import { NavLayout } from '..'
import { Sidebar } from '@/components'
import { useMemo } from 'react'
import { IsTauriEnv } from '@/utils'
import classNames from 'classnames'
import React from 'react'

export const MainLayout: React.FC = () => {
    const className = useMemo(() => {
        return classNames('MainLayout', {
            Native: IsTauriEnv()
        })
    }, [])
    return (
        <div className={className}>
            <NavLayout>
                <Sidebar />
            </NavLayout>
            <div className="MainLayout-Content">
                <Outlet />
            </div>
        </div>
    )
}
