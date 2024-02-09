import { PropsWithChildren, useRef } from 'react'
import classNames from 'classnames'

interface PageLayoutProps extends PropsWithChildren {
    className?: string
}

export const PageLayout: React.FC<PageLayoutProps> = ({
    className,
    children
}) => {
    const extendedClassname: string = useRef(
        classNames('PageLayout', className)
    ).current

    return <div className={extendedClassname}>{children}</div>
}
