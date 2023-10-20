export default defineNuxtConfig({
  app: {
    head: {
      title: 'giacademy',
    },
  },
  ssr: false,
  modules: [
    'nuxt-gtag',
    '@vueuse/nuxt',
    'nuxt-windicss',
    '@nuxt/image',
  ],
  image: {
    format: ['webp'],
    domains: ['giacademy.kz'],
  },
  components: {
    dirs: [
      '@/components/base-components',
      '@/components/icons',
    ],
  },
  css: [
    '@/styles/main.scss',
    'sweetalert2/dist/sweetalert2.min.css',
    'vue3-carousel/dist/carousel.css',
  ],
  srcDir: 'src',
});
