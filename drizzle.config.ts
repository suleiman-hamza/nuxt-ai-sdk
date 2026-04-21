import { defineConfig } from "drizzle-kit";
const config = useRuntimeConfig();

export default defineConfig({
  dialect: "postgresql",
  schema: "./server/database/schema.ts",
  out: "./server/database/migrations",
  dbCredentials: {
    url: config.databaseUrl,
  },
});
