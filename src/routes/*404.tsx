import { Ghost } from "~/components/Ghost/Ghost";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <div class="flex flex-col gap-4 items-center mt-4">
      <HttpStatusCode code={404} />
      <div class="flex flex-col gap-0 items-center">
        <h1 class="text-6xl font-bold">404</h1>
        <h2 class="text-4xl font-bold">Page not found</h2>
      </div>
      <p class="text-lg italic">
        Seems like all you find here is a scary ghost!
      </p>
      <Ghost />
    </div>
  );
}
