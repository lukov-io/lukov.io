import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,

  css: [
    '~/assets/styles/index.scss',
  ],

  components: true,

  modules: [
    '@nuxtjs/stylelint-module',
    '@nuxt/eslint',
  ],

  plugins: [
    '~/plugins/pinia.js',
    '~/plugins/anime.js',
    '~/plugins/global-components.js',
    '~/plugins/vue-tel-input.js',
  ],

  buildModules: [
    '@nuxtjs/stylelint-module',
  ],

  router: {
    middleware: ['manifest-route-rule'],
  },

  manifestRouteRule: {
    override: true,
  },

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

  stylelint: {
    fix: true,
    files: ['**/*.{vue,css,scss}'],
  },

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
