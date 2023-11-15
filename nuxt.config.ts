// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
    modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: 'qt44gk44',
		apiVersion: '2022-03-25'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
