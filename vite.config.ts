import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts'

export default defineConfig({

  plugins: [
    react(),
    dts({
      rollupTypes: true
    }),
  ],
  build: {
    sourcemap: false,
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['es'],
      fileName: "index",
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    }
  }
})
