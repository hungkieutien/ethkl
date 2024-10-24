export default defineNuxtConfig({
  css: ["@/assets/main.scss"],
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
        },
      },
    },
  },

  compatibilityDate: "2024-10-14",
});
