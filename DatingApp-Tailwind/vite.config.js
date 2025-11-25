import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                onboarding2: resolve(__dirname, 'onboarding2.html'),
                onboarding3: resolve(__dirname, 'onboarding3.html'),
                auth: resolve(__dirname, 'auth.html'),
            },
        },
    },
    server: {
        port: 3000,
        open: true
    }
})