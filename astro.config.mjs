import sitemap from "@astrojs/sitemap";
import { satteri } from "@astrojs/markdown-satteri";
import { defineConfig } from "astro/config";
import imgAttr from "satteri-imgattr";

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
    processor: satteri({
      hastPlugins: [imgAttr()],
    }),
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
