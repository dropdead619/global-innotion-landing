export default defineNuxtConfig({
  app: {
    head: {
      title: 'giacademy',
    },
  },
  modules: [
    'nuxt-gtag',
    '@vueuse/nuxt',
    'nuxt-windicss',
  ],
  components: {
    dirs: [
      '@/components/base-components',
      '@/components/icons',
    ],
  },
  css: [
    '@/styles/main.scss',
    'sweetalert2/dist/sweetalert2.min.css',
  ],
  srcDir: 'src',
});
