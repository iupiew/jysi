// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content', ['@nuxtjs/google-fonts', {
    display: "swap",
    families: {
      'Orbitron': true
    },
    }],
  ],
  devtools: { enabled: true },
  

})
