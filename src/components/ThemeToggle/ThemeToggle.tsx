import { createComputed, createEffect, createSignal, onMount } from "solid-js";

export function ThemeToggle() {
  const [theme, setTheme] = createSignal<string | undefined>();
  const label = () => {
    if (theme()) return `/${theme()}/`;
  };

  onMount(() => {
    const root = document.documentElement;
    setTheme(root.classList.value);
  });

  createEffect(() => {
    const root = document.documentElement;

    if (theme() === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });

  function toggle() {
    setTheme((value) => {
      if (value === "light") {
        return "dark";
      }

      return "light";
    });
  }

  return (
    <button type="button" onClick={toggle} class="tracking-wide">
      {label()}
    </button>
  );
}
