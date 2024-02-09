import './Sidebar.css'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Logo } from '..'
import React from 'react'

let COUNT_EXAMPLE = 0

export const Sidebar: React.FC = () => {
    const [count, setCount] = useState(COUNT_EXAMPLE)
    const navigate = useNavigate()

    return (
        <div className="Sidebar">
            <Logo />
            <button onClick={() => setCount((count) => count + 1)}>
                Increment {count}
            </button>
            <button
                onClick={() =>
                    navigate('/about', {
                        state: {
                            count
                        }
                    })
                }
            >
                Go to /about with counter state
            </button>
            <button onClick={() => navigate('/debug')}>Go to to /debug</button>
            <button onClick={() => navigate('/account')}>
                Go to to /account
            </button>
        </div>
    )
}
