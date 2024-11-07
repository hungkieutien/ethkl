export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts", "@nuxt/icon", "@nuxt/image"],
  googleFonts: {
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: '@import "@/assets/scss/utils/utils.scss";',
        },
      },
    },
  },
  css: ["@/assets/scss/main.scss"],
  compatibilityDate: "2024-10-14",
});
