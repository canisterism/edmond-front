const pkg = require('./package')

module.exports = {
  mode: 'universal',
  srcDir: 'app',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Edmond',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        integrity:
          'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Archivo+Black|Noto+Sans+JP'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    {
      src: '@/assets/stylesheets/base/ress.css'
    },
    {
      src: '@/assets/stylesheets/main.sass'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Apollo module configuration
   */
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          // set environment variable if you want to run locally: export EDMOND_API_ENDPOINT=http://localhost:8888/graphql
          process.env.EDMOND_API_ENDPOINT ||
          'http://192.168.100.28:8888/graphql'
      }
    }
  },
  /*
  ** style-resources module configuration
    ** This module makes css(sass) variables global.
    ** ref: https://github.com/nuxt-community/style-resources-module
  */
  styleResources: {
    sass: './assets/stylesheets/base/_variables.sass'
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
