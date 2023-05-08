// only add `router.base = '/<repository_name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const gaTags = process.env.DEPLOY_ENV === 'GH_PAGES' ? [
  {
    hid: 'gtm-script1',
    src: 'https://www.googletagmanager.com/gtag/js?id=G-WWZYYWN8W7',
    defer: true
  },
  {
    hid: 'gtm-script2',
    innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-WWZYYWN8W7');
    `,
    type: 'text/javascript',
    charset: 'utf-8'
  },
  {
    async: true,
    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7536040795321095'
  }
] : []

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
      script: [
        ...gaTags
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
    kit: {
      floc: true
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
})