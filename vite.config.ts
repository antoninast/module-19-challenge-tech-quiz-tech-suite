import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/_tests_/setup.ts'
    },
    server: {
        port: 3001,
        open: false,
        proxy: {
            '/api': {
                target: 'http://localhost:5005',
                secure: false,
                changeOrigin: true
            }
        }
    }
});
