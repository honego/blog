import sitemap from "@astrojs/sitemap";
import { satteri } from "@astrojs/markdown-satteri";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { SITE } from "./src/config.ts";
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
  vite: {
    plugins: [tailwindcss()],
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
      features: { directive: true },
      mdastPlugins: [video, readingTime],
    }),
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
});
