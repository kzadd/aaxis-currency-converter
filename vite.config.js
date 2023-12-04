import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  preview: { port: 3030 },
  server: { port: 3000 }
})
