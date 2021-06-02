import { Router, Context } from "../deps.ts";

export function use(path: string, router: Router) {
    router.get("/users", (ctx: Context) => {
        ctx.response.body = "Welcome User";
    });

    router.get("/users/:name", (ctx: Context) => {
        // @ts-ignore
        ctx.response.body = `Welcome ${ctx.params.name}`;
    });
}


