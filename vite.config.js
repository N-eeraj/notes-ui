import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      '@layouts' : path.resolve(__dirname, './src/layouts'),
      '@pages' : path.resolve(__dirname, './src/pages'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@hooks' : path.resolve(__dirname, './src/hooks'),
      '@toast' : path.resolve(__dirname, './src/utils/toast.js'),
      '@axios' : path.resolve(__dirname, './src/utils/axios.js'),
      '@validators' : path.resolve(__dirname, './src/utils/validator.js'),
      '@styles' : path.resolve(__dirname, './src/styles'),
    },
  },
  plugins: [react()],
})
