// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

// biome-ignore lint/style/noNonNullAssertion: default
mount(() => <StartClient />, document.getElementById("app")!);
