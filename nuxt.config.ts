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
    // '@nuxtjs/supabase',
  ],
  // supabase: {
  //   url: 'https://rmwqxjmtpyhyfllgirnd.supabase.co',
  //   serviceKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtd3F4am10cHloeWZsbGdpcm5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwNTA1MzksImV4cCI6MjAxMjYyNjUzOX0.PVhxB-yQ8A-0F_mG-bHGBmWUJSpG2XWnZMqw9zEhuLo',
  // },
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
