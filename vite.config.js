import { defineConfig } from 'vite';
import { resolve } from "path";

export default defineConfig({
    css: {
        devSourcemap: true
    },
    plugins: [
        tailwindcss(),
    ],

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                milligram: resolve(__dirname, "milligram.html"),
                foundation: resolve(__dirname, "foundation.html"),
                tailwind: resolve(__dirname, "tailwind.html"),
                publicering: resolve(__dirname, "publicering.html"),
            }
        }
    }
})