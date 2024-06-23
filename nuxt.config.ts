// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@pinia/nuxt",
    "nuxt-aos",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
  ],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  colorMode: {
    preference: "light",
  },
  googleFonts: {
    families: {
      "Hind+Siliguri": [300, 400, 500, 600, 700],
    },
  },
});
