// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
export default({
    vue: {  
        compilerOptions: {
          isCustomElement: (tag) => ['b-navbar','b-col','b-row','inline-svg'].includes(tag),
        }
    },
    head: {
      title: 'Pisit Portfolio',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
      ],
    },
    vite: {
      plugins: [
        svgLoader({}),
      ],
    },
})