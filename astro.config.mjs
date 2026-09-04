import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://blog.honeok.com",
  output: "static",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});
