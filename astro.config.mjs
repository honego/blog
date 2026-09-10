import sitemap from "@astrojs/sitemap";
import { satteri } from "@astrojs/markdown-satteri";
import { defineConfig, fontProviders } from "astro/config";
import { SITE } from "./src/config.ts";
import copyCodeBlocks from "./src/plugins/copy-code.mjs";
import readingTime from "./src/plugins/reading-time.mjs";
import video from "./src/plugins/video.mjs";

export default defineConfig({
  site: SITE.url,
  trailingSlash: "never",
  output: "static",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Noto Serif SC",
      cssVariable: "--font-serif",
      weights: ["200 900"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["ui-serif", "Georgia", "Times New Roman", "serif"],
      display: "swap",
    },
  ],
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
      features: {
        directive: true,
        smartPunctuation: {
          quotes: false,
          dashes: true,
          ellipses: true,
        },
      },
      mdastPlugins: [video, readingTime],
      hastPlugins: [copyCodeBlocks],
    }),
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
