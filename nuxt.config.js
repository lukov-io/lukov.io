import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: true,

  vite: {
    build: {
      manifest: true,
      assetsDir: 'public'
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '~/assets/styles/scss/variables.scss';
                           @import '~/assets/styles/scss/mixins.scss';`
        }
      }
    }
  },

  css: [
    '~/assets/styles/index.scss'
  ],

  components: true,

  modules: [

  ],

  plugins: [
    '~/plugins/pinia.js',
    '~/plugins/anime.js'
  ],

  build: {
    postcss: {
      plugins: {
        autoprefixer: {}
      }
    }
  }
});
