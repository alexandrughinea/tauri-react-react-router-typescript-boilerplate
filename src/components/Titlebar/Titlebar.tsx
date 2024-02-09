import './Titlebar.css'
import { appWindow } from '@tauri-apps/api/window'
import { IsTauriEnv } from '@/utils'
import { useCallback } from 'react'
import React from 'react'

export const Titlebar: React.FC = () => {
    if (!IsTauriEnv()) {
        return null
    }

    const onMinimize = useCallback(() => appWindow.minimize(), [])
    const onMaximize = useCallback(() => appWindow.toggleMaximize(), [])
    const onClose = useCallback(() => appWindow.close(), [])

    return (
        <div data-tauri-drag-region={true} className="Titlebar">
            <div className="Titlebar-Button" onClick={onMinimize}>
                _
            </div>
            <div className="Titlebar-Button" onClick={onMaximize}>
                [ ]
            </div>
            <div className="Titlebar-Button" onClick={onClose}>
                X
            </div>
        </div>
    )
}
