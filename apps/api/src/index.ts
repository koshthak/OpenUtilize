import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { logger } from "@bogeychan/elysia-logger";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(swagger())
  .use(logger({ stream: console }))
  .use(cors())
  .onError(({ set }) => {
    set.status = 500;
    return { message: "Some Error Happened" };
  })
  .get("/", (ctx) => {
    ctx.log.info(ctx.request, "Request");
    return "Hello Elysia";
  })
  .post(
    "/pdf",
    async ({ body, set }) => {
      console.log(body);
      for (let index = 0; index < body.files.length; index++) {
        const file = body.files[index];
        if (file.type !== "application/pdf") {
          set.status = 403;
          return { message: "Must upload a pdf file." };
        }
        await Bun.write(file.name || "test.pdf", file);

        const proc = Bun.spawn(
          ["convert", file.name || "test.pdf", `${file.name || "test"}.png`],
          { stderr: "pipe" }
        );
        const errors: string = await Bun.readableStreamToText(proc.stderr);
        if (errors) {
          throw new Error();
        }

        const text = await new Response(proc.stdout).text();
        console.log(text);

        console.log(proc.pid);
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
