import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://blog.honeok.com",
  trailingSlash: "never",
  output: "static",
  build: {
    format: "preserve",
  },
  integrations: [
    sitemap({
      serialize(item) {
        if (/\/[1-9]\d*$/.test(item.url)) {
          item.url += ".html";
        }

        return item;
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});
