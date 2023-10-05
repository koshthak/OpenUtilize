import {
  edenTreaty as treaty,
  edenFetch as fetch,
  // edenFn as fn,
} from "@elysiajs/eden";

import type { App } from "@open-utilize/api";

const edenTreaty = treaty<App>("http://localhost:5000");
const edenFetch = fetch<App>("http://localhost:5000");
// const edenFn = fn<App>("http://localhost:5000");

export { edenTreaty, edenFetch };
