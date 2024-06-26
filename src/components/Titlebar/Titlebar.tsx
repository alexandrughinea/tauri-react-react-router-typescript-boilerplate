import './Titlebar.css'
import { appWindow } from '@tauri-apps/api/window'
import { IsTauriEnv } from '@/utils'
import { useCallback } from 'react'
import React from 'react'

export const Titlebar: React.FC = () => {
    const onMinimize = useCallback(() => appWindow.minimize(), [])
    const onMaximize = useCallback(() => appWindow.toggleMaximize(), [])
    const onClose = useCallback(() => appWindow.close(), [])

    if (!IsTauriEnv()) {
        return null
    }

    return (
        <div
            data-tauri-drag-region={true}
            className="Titlebar"
            style={{
                borderTopLeftRadius: `${import.meta.env.VITE_APP_BORDER_RADIUS}px`,
                borderTopRightRadius: `${import.meta.env.VITE_APP_BORDER_RADIUS}px`
            }}>
            <div className="Titlebar-Button Other" onClick={onMinimize} />
            <div className="Titlebar-Button Other" onClick={onMaximize} />
            <div className="Titlebar-Button Close" onClick={onClose} />
        </div>
    )
}
