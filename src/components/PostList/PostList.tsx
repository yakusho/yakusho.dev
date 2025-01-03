import dayjs from "dayjs";
import { For } from "solid-js";
import { posts } from "~/data/posts";
import { Cat } from "../Cat/Cat";

export function PostList() {
  if (!Object.entries(posts).length) {
    return (
      <div class="flex flex-col gap-4 mt-12">
        <p class="text-center text-lg font-mono">
          You're too early, there's nothing here yet!
        </p>
        <Cat />
      </div>
    );
  }

  return (
    <div class="flex flex-col gap-4 max-w-full">
      <For each={Object.entries(posts)}>
        {([slug, metadata]) => {
          return (
            <div class="flex flex-col">
              <div class="flex flex-row justify-between items-center">
                <a
                  href={slug}
                  class="text-lg font-bold hover:opacity-70 duration-500 transition-opacity"
                >
                  {metadata.title}
                </a>
                <span class="text-sm opacity-80">
                  {dayjs(metadata.date).format("MMMM D, YYYY")}
                </span>
              </div>
              <span class="text-sm italic opacity-70">{metadata.spoiler}</span>
            </div>
          );
        }}
      </For>
    </div>
  );
}
