export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],   
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel:"stylesheet",
        href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          
      },
      {
        rel:"stylesheet",
        href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      },
      {
        rel:"stylesheet",
        href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      },
      {
        rel:"stylesheet",
        href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/fontawesome.min.css"
      },
      
    ],
        script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/styles.css"
  ],
  router:{
    middleware:["clearValidationErrors"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "./plugins/mixins/user.js","./plugins/axios.js","./plugins/mixins/validation.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:"http://localhost/nuxtback/public/api"
  },
  auth: {
  strategies: {
    local: {
      token: {
        property: 'meta.token',
       // required: true,
        //type: 'Bearer'
      },
      user: {
        property: 'data',
        // autoFetch: true
      },
      endpoints: {
        login: { url: '/login', method: 'post' },
        logout: { url: '/logout', method: 'post' },
        user: { url: '/user', method: 'get' }
      }
    }
  }
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
