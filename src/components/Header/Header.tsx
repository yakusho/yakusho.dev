import type { JSX } from "solid-js";
import { twMerge } from "tailwind-merge";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export function Link(props: JSX.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = twMerge("relative tracking-widest after:bg-zinc-950 after:dark:bg-neutral-300 after:absolute after:h-[0.25px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer", props.class)
  return (
    <a class={classes} {...props}>
      {props.children}
    </a>
  )
}

export function Header() {
  return (
    <header class="py-4">
      <nav class="flex flex-row justify-between font-mono">
        <ul class="flex flex-row gap-2">
          <Link href="/">[home]</Link>
          <Link href="https://github.com/yakusho" target="_blank" rel="noopener noreferrer">[github]</Link>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
