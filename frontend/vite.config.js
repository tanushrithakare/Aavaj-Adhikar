import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    // Add these to fix URI issues
    hmr: {
      overlay: false // Disable error overlay temporarily
    },
    watch: {
      usePolling: true // Fix for some Windows file system issues
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined // Try this if chunking is causing issues
      }
    }
  }
})