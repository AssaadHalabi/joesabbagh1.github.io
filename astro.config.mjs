import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import UnoCSS from "unocss/astro"

export default defineConfig({
  // used to generate images
  site: "http://joesabbagh.me/",
  trailingSlash: "ignore",
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
})
