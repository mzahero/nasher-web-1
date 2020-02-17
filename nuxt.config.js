require('dotenv').config()

export default {
    mode: 'spa',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: "stylesheet",
                type: "text/css",
                href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'
            },
            {
                rel: "stylesheet",
                type: "text/css",
                href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css'
            }
        ],
        script: [
            {
                src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js",
                type: "text/javascript"
            }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Plugins to load before mounting the App
    */

    env: {
        VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
    },

    plugins: [
        '@/plugins/google-maps',
        '@/plugins/vue-js-toggle-button',
        '@/plugins/vue-slider-component',
        '@/plugins/vue-datetime',
        '@/plugins/vue-multiselect',
        '@/plugins/vue-upload-component'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        'bootstrap-vue/nuxt',
        '@nuxtjs/auth'
    ],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },
    auth: {
        redirect: {
            login: '/landing',
            logout: '/landing'
        },
        strategies: {
            local: {
                endpoints: {
                    login: { url: 'login', method: 'post', propertyName: 'data.token' },
                    logout: { url: 'logout', method: 'post' },
                    user: { url: 'user', method: 'get', propertyName: 'data' }
                },
                tokenRequired: true,
                tokenType: 'Bearer'
            }
        }
    }
}