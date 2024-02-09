export function isDevEnv(): boolean {
    return import.meta.env.DEV
}

export function IsTauriEnv(): boolean {
    //@ts-expect-error TBD
    return globalThis.Boolean(globalThis.__TAURI__)
}
