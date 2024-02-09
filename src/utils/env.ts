export function isDevEnv(): boolean {
    return import.meta.env.DEV
}

export function IsTauriEnv(): boolean {
    //@ts-ignore TBD
    return globalThis.Boolean(globalThis.__TAURI__)
}
