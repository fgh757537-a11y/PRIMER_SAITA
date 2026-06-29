import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/название-твоего-репозитория/', // Важно: добавь слеши в начале и конце
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
});
