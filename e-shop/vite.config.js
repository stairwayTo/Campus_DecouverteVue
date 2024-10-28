import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Spirulina',
                short_name: 'Spiru',
                description: 'Une superbe application pour retrouver les vendeurs de Spirulina',
                theme_color: '#ffffff',
                icons: [{
                    src: 'image/192.png', // Chemin vers l'icône 192x192
                    sizes: '192x192',
                    type: 'image/png',
                },
                    {
                        src: 'image/512.png', // Chemin vers l'icône 512x512
                        sizes: '512x512',
                        type: 'image/png',
                    },],
            },
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
