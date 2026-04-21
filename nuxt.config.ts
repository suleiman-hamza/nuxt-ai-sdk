import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    openaiApiKey: process.env.NUXT_OPENAI_API_KEY,
    aiGatewayApiKey: process.env.NUXT_AI_GATEWAY_API_KEY,
    sessionPassword: process.env.NUXT_SESSION_PASSWORD,
    databaseUrl: process.env.DATABASE_URL,
    oauth: {
      // provider in lowercase (github, google, etc.)
      github: {
        clientId: "process.env.NUXT_OAUTH_GITHUB_CLIENT_ID",
        clientSecret: "process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET",
      },
    },
  },
  modules: ["@nuxt/ui", "nuxt-auth-utils", "motion-v/nuxt"],
  css: ["assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  routeRules: {
    "/": {
      prerender: true,
    },
  },
});
