import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/akali4/", // 👈 replace with your actual GitHub repo name
});
