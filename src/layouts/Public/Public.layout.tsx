import './Public.layout.css'
import { Outlet } from 'react-router'
import React, { useMemo } from 'react'
import { IsTauriEnv } from '@/utils'
import classNames from 'classnames'

export const PublicLayout: React.FC = () => {
    const className = useMemo(() => {
        return classNames('PublicLayout', {
            Native: IsTauriEnv()
        })
    }, [])
    return (
        <div data-tauri-drag-region={true} className={className}>
            <div className="PublicLayout-Content">
                <Outlet />
            </div>
        </div>
    )
}
