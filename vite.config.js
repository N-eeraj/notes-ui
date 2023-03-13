import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      '@pages' : path.resolve(__dirname, './src/pages'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@styles' : path.resolve(__dirname, './src/styles'),
    },
  },
  plugins: [react()],
})
