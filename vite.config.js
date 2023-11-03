import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: '/vite-react-template/',
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      assets: ['/src/assets'],
      components: ['/src/components'],
      constants: ['/src/constants'],
      services: ['/src/services'],
      /*
        icons: ['/src/icons'], // <---  add necessary folders here for absolute path
       */
    }
  },
});
