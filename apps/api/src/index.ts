import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { logger } from "@bogeychan/elysia-logger";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(swagger())
  .use(logger({ stream: console }))
  .use(cors())
  .get("/", (ctx) => {
    ctx.log.info(ctx.request, "Request");
    return "Hello Elysia";
  })
  .get("/abc", (ctx) => {
    ctx.log.info(ctx.request, "Request");
    return "Hello Elysia";
  })
  .post("/pdf", ({ body: { file } }) => file, {
    body: t.Object({
      file: t.File(),
    }),
  })
  .listen(5000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
