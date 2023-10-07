import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { logger } from "@bogeychan/elysia-logger";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(swagger())
  .use(logger({ stream: console }))
  .use(cors())
  .onError((error) => {
    console.log(error);
    return new Response("Some Error Happened", { status: 500 });
  })
  .get("/", (ctx) => {
    ctx.log.info(ctx.request, "Request");
    return "Hello Elysia";
  })
  .get("/abc", (ctx) => {
    ctx.log.info(ctx.request, "Request");
    return { message: "Hello Elysia" };
  })
  .post(
    "/pdf",
    async ({ body }) => {
      console.log(body);
      for (let index = 0; index < body.files.length; index++) {
        const file = body.files[index];
        // filename missing bug PR (eden): https://github.com/elysiajs/eden/pull/26
        // filetype missing bug (bun): https://github.com/oven-sh/bun/issues/6012
        console.log("file.name: ", file.name);
        console.log("file.size: ", file.size);
        console.log("file.type: ", file.type);
      }
      return { message: "success got the file" };
    },
    {
      body: t.Object({ files: t.Files() }),
      type: "formdata",
    }
  )
  .listen(5000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
