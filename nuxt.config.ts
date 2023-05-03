// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vue: {  
        compilerOptions: {
          isCustomElement: (tag) => ['b-navbar','b-col','b-row','inline-svg'].includes(tag),
        },
    }
})
