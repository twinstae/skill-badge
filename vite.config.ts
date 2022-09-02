import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  define: {
    __VITE__: true
  },
  resolve: {
    alias: {
      '~': path.resolve('./app')
    }
  }
})