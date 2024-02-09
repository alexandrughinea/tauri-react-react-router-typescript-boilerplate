#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::{Manager, Runtime, WindowBuilder};
use window_vibrancy::{apply_blur, apply_vibrancy, NSVisualEffectMaterial};
use tauri_plugin_store::Builder;
use std::env;

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
fn main() {
    dotenv::dotenv().ok();

    let default_value: f64 = 14.0;
    let default_border_radius: f64 = match env::var("VITE_APP_BORDER_RADIUS") {
        Ok(val) => val.parse().unwrap_or(default_value),
        Err(_) => default_value,
    };

    tauri::Builder::default()
        .setup(move |app| {
            let window = app.get_window("main").unwrap();

            #[cfg(target_os = "macos")]
            apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, Some(default_border_radius))
                .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

            #[cfg(target_os = "windows")]
            apply_blur(&window, Some((default_border_radius, default_border_radius, default_border_radius, 125)))
                .expect("Unsupported platform! 'apply_blur' is only supported on Windows");

            Ok(())
        })
        .plugin(Builder::default().build())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
