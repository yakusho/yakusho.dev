// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <script>
            {`
              (function () {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              })();
            `}
          </script>
          {assets}
        </head>
        <body class="mx-auto max-w-2xl px-5 py-4 bg-neutral-100 text-zinc-950 dark:bg-zinc-950 dark:text-neutral-300">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
