import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export const socket = io(import.meta.env.VITE_APP_API as string, {
    autoConnect: false
})

const ConnectionManager = ({ isConnected }) => {
    const onConnect = () => socket.connect()
    const onDisconnect = () => socket.disconnect()

    return (
        <>
            <button onClick={onConnect} disabled={isConnected}>
                Connect
            </button>
            <button onClick={onDisconnect} disabled={!isConnected}>
                Disconnect
            </button>
        </>
    )
}

const ConnectionState = ({ isConnected }) => {
    return <p>State: {'' + isConnected}</p>
}

const ConnectionEvents = ({ events }) => {
    return (
        <ul>
            {events.map((event, index) => (
                <li key={index}>{event}</li>
            ))}
        </ul>
    )
}

export const SocketIOClient: React.FC = () => {
    const [isConnected, setIsConnected] = useState(socket.connected)
    const [fooEvents, setFooEvents] = useState([])

    useEffect(() => {
        function onConnect() {
            setIsConnected(true)
        }

        function onDisconnect() {
            setIsConnected(false)
        }

        function onFooEvent(value) {
            setFooEvents((previous) => [...previous, value])
        }

        socket.emit('client:connected', import.meta.env.VITE_APP_TITLE)

        socket.on('connect', onConnect)
        socket.on('disconnect', onDisconnect)
        socket.on('foo:events', onFooEvent)

        return () => {
            socket.off('connect', onConnect)
            socket.off('disconnect', onDisconnect)
            socket.off('foo:events', onFooEvent)
        }
    }, [])

    return (
        <div className="SocketIOClient">
            <ConnectionState isConnected={isConnected} />
            <ConnectionEvents events={fooEvents} />
            <ConnectionManager isConnected={isConnected} />
        </div>
    )
}
