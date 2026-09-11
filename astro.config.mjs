// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jsiksn.github.io",
  integrations: [sitemap()],
  // CSS(약 22KB)를 HTML 안에 넣어 화면 그리기를 막는 요청을 없앤다 (GitHub Pages는 캐시 10분이라 외부 파일 이점이 작음)
  build: { inlineStylesheets: "always" },
});
