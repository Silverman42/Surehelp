import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  pages: true,
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@vueuse/nuxt"],
  css: ["~/assets/css/main.css", "~/assets/css/transitions.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      // link: [
      //   {
      //     href: "/favicon.svg",
      //     type: "image/svg+xml",
      //     rel: "icon",
      //   },
      // ],
      title: "Surehelp",
      meta: [
        {
          name: "theme-color",
          content: "#001119",
        },
      ],
    },
  },
  icon: {
    customCollections: [
      {
        prefix: "surehelp",
        dir: "./assets/icons",
      },
    ],
  },
});
