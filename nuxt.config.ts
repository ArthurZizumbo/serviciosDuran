// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    // '@/assets/css/main.css'
  ],
  modules: [
    '@nuxt/ui', 
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@samk-dev/nuxt-vcalendar',
    '@nuxt/eslint',
  ],
  plugins: [
  ],
});
