import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://lhuaraya.github.io/gh-react-vite',
  plugins: [react()],
})
