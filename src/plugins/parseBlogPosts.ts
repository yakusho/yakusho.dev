import type { Plugin } from "vinxi";

import { resolve, join } from "node:path";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { matter } from "vfile-matter";
import { readSync } from "to-vfile";
import type { BlogPost } from "~/data/posts";

function process() {
  const outputFile = resolve("src/data/posts.json");
  const blogDir = resolve("src/routes/blog");
  const files = readdirSync(blogDir);

  const blogPosts = files
    .filter(
      (file) => statSync(join(blogDir, file)).isFile() && file.endsWith(".mdx"),
    )
    .reduce(
      (acc, file) => {
        const vfile = readSync(resolve("src/routes/blog", file));
        matter(vfile);

        acc[`blog/${file.replace(".mdx", "")}`] = vfile.data.matter as BlogPost;

        return acc;
      },
      {} as Record<string, BlogPost>,
    );

  writeFileSync(outputFile, JSON.stringify(blogPosts, null, 2), "utf-8");
}

export function parseBlogPosts(): Plugin {
  return {
    name: "parseBlogPosts",
    buildStart: async () => process(),
    configureServer: (server) => {
      server.watcher.on("change", (filePath) => {
        if (filePath.includes("/src/routes/blog")) {
          process();
        }
      });
    },
  };
}
