// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-icon',
    ['@nuxtjs/google-fonts', {
      families: {
        'Nunito': true,
        'Poppins': true,
        'Teko': true,
        download: true,
        inject: true
      }
    }] ,
    'nuxt-swiper',
    'nuxt-rating'
  ] ,
})
