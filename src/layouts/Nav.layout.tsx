import React, { PropsWithChildren } from 'react'

export const NavLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <nav data-tauri-drag-region={true} className="NavLayout">
            {children}
        </nav>
    )
}
