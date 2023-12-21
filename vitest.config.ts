import { defineConfig } from 'vitest/config'
import react from './node_modules/@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
})
