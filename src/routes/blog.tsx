import type { RouteSectionProps } from "@solidjs/router";
import { createSignal, For } from "solid-js";
import { Head } from "~/components/Head/Head";
import { type BlogPost, posts } from "~/data/posts";
import dayjs from "dayjs";

function getMetadata(pathname: string) {
  return posts[pathname.replace(/^\//, "")];
}

export default function BlogLayout(props: RouteSectionProps) {
  const [metadata] = createSignal<BlogPost>(
    getMetadata(props.location.pathname),
  );

  return (
    <div>
      <Head title={metadata().title} />
      <div class="flex flex-col gap-2 mb-6">
        <div class="flex flex-row justify-between items-center">
          <p class="text-2xl font-bold">{metadata().title}</p>
          <p class="opacity-70">
            {dayjs(metadata().date).format("dddd, MMMM D, YYYY")}
          </p>
        </div>
        <div class="flex flex-row">
          <For each={metadata().tags}>
            {tag => (<span class="bg-purple-200 text-purple-800 text-xs font-medium me-1 px-2.5 py-1 rounded-full dark:bg-purple-900 dark:text-purple-300 font-mono">{tag}</span>)}
          </For>
        </div>
      </div>
      <article class="prose prose-lg dark:prose-invert">
        {props.children}
      </article>
    </div>
  );
}
