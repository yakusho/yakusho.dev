import JSONPosts from "./posts.json";

export type BlogPost = {
  title: string;
  date: string;
  spoiler: string;
  tags: string[];
};

export const posts: Record<string, BlogPost> = JSONPosts;
