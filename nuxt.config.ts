export default defineNuxtConfig({
  app: {
    head: {
      title: 'Global Innotion',
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
    'floating-vue/dist/style.css',
    'vue3-carousel/dist/carousel.css',
  ],
  plugins: [
    { src: '@/plugins/floating-vue.ts' },
  ],
  srcDir: 'src',
});
