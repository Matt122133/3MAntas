import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://matt122133.github.io",
  base: "/3MAntas",
  output: "static",
  integrations: [tailwind()]
});