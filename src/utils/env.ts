export function isDevEnv(): boolean {
    return import.meta.env.DEV
}

export function IsTauriEnv(): boolean {
    return globalThis.Boolean(globalThis.__TAURI__)
}
