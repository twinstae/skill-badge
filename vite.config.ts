import defineConfig from './defineConfig'
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
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './app/setupTest.ts',
  },
})