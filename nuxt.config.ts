import colors from 'vuetify/es5/util/colors'
import axios from 'axios'
import { NuxtConfig } from '@nuxt/types'
const nuxtconfig: NuxtConfig = {
  ssr: true,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt2-my-blog-v2',
    title: 'nuxt2-my-blog-v2',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'nuxt-typed-vuex',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: '/',
  },
  publicRuntimeConfig: {
    END_POINT:
      process.env.NODE_ENV !== 'production' ? process.env.END_POINT : undefined,
    SERVICE_DOMAIN:
      process.env.NODE_ENV !== 'production'
        ? process.env.SERVICE_DOMAIN
        : undefined,
  },
  privateRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    END_POINT: process.env.END_POINT,
    SERVICE_DOMAIN: process.env.SERVICE_DOMAIN,
  },
  vuetify: {
    theme: {
      defaultAssets: {
        font: false,
        icons: false,
      },
      dark: false,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  build: {
    transpile: [/typed-vuex/],
  },
  // generate: {
  //   async routes() {
  //     const pages = await axios
  //       .get(
  //         `https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/${process.env.END_POINT}`,
  //         {
  //           headers: {
  //             'X-MICROCMS-API-KEY': process.env.API_KEY,
  //           },
  //         }
  //       )
  //       .then((res) =>
  //         res.data.contents.map((content:any) => ({
  //           route: `/${content.id}`,
  //           payload: content,
  //         }))
  //       )
  //     return pages
  //   },
  // },
}
export default nuxtconfig;
