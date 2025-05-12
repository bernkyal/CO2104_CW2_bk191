/// <reference types="node" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'   // ← pull in Node’s URL helpers

export default defineConfig({
  base: '/CO2104_CW2_bk191/',             // your new base
  plugins: [react()],
  resolve: {
    alias: {
      // map “@/…” → <projectRoot>/src
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
