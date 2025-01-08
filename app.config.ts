import { defineConfig } from "@solidjs/start/config";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";
import remarkFrontmatter from "remark-frontmatter";
import { parseBlogPosts } from "./src/plugins/parseBlogPosts";

const { default: mdx } = pkg;
export default defineConfig({
  extensions: ["mdx", "md"],
  server: {
    prerender: {
      crawlLinks: true,
    },
    preset: "cloudflare-pages-static",
  },
  vite: {
    plugins: [
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        remarkPlugins: [remarkFrontmatter],
      }),
      parseBlogPosts(),
    ],
  },
});
