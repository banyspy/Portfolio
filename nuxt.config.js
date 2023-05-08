// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
export default({
    vue: {  
        compilerOptions: {
          isCustomElement: (tag) => ['b-navbar',
          'b-col',
          'b-row',
          'b-navbar-nav',
          'b-nav-item-dropdown',
          'b-dropdown-item value',
          'b-form-select',
          'inline-svg'].includes(tag),
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
      server:{
        fs:{
          strict:false
        }
      }
    },
})