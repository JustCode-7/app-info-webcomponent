import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      customElement: true // 👈 Sorgt dafür, dass Vue .ce.vue Dateien als Custom Elements behandelt
    }),
    vueDevTools(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // Vite lädt dieses CSS automatisch vor dem Code JEDER .vue Datei
        //@import "bootstrap/dist/css/bootstrap.min.css";
        // getAssetsPath für DPL???
        // additionalData: `@import '${fileURLToPath(new URL('./node_modules/bootstrap/dist/css/bootstrap.min.css', import.meta.url))}';`
      }
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build : {
    lib: {
      // Hier definierst du den Einstiegspunkt deiner Web Component
      entry: fileURLToPath(new URL('./src/main.ts', import.meta.url)),
      name: 'MyVueWebComponent',
      fileName: () => 'my-webcomponent.js',
      formats: ['es'] // 'es' (steht für ESM)
    },
  },
  resolve: {
    alias: {
      // erlaubt das Importieren von Dateien mit dem @-Alias
      // bsp: import InfoIcon from "@/components/icons/InfoIcon.vue";
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
