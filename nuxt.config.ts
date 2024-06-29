// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },
  modules: ["@nuxt/ui", "@nuxt/image"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "placeholder",
    },
  },
});
