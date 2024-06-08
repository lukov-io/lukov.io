import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,

  vite: {
    build: {
      manifest: true,
      assetsDir: 'public',
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '~/assets/styles/scss/variables.scss';`,
        },
      },
    },
  },

  css: [
    '~/assets/styles/index.scss',
  ],

  components: true,

  modules: [
    '@nuxtjs/stylelint-module',
    '@nuxt/eslint',
  ],

  buildModules: [
    '@nuxtjs/stylelint-module',
  ],

  stylelint: {
    fix: true,
    files: ['**/*.{vue,css,scss}'],
  },

  plugins: [
    '~/plugins/pinia.js',
    '~/plugins/anime.js',
  ],

  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },
})
