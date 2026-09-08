import sitemap from "@astrojs/sitemap";
import { satteri } from "@astrojs/markdown-satteri";
import { defineConfig } from "astro/config";
import { SITE } from "./src/config.ts";
import htmlImage from "./src/plugins/html-image.mjs";
import readingTime from "./src/plugins/reading-time.mjs";
import video from "./src/plugins/video.mjs";

export default defineConfig({
  site: SITE.url,
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
      features: { directive: true, rawHtml: true },
      mdastPlugins: [video, readingTime],
      hastPlugins: [htmlImage],
    }),
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
