// oak contains prebuilt router middleware that allows to handle different
// routes, params, and queries

// import Router and Application objects from the oak library
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// create new instance of the Application class
const app = new Application();

// create new instance of Router class
const router = new Router();

const port = 3001;

// create a handler for a "GET" reqyest to "/"
// ie the root route
router.get("/", (ctx) => {
    ctx.response.body = "Welcome to Oak";
});
// the app will only respond to GET requests on the / route
// in the previous version, the app would respond to any request at all

// add an additional route
router.get("/users", (ctx) => {
    ctx.response.body = "Wlcome User";
});

// and another one
router.get("/users/:name", (ctx) => {
    ctx.response.body = `Welcome ${ctx.params.name}`;
});

// tell the app to use the router as middleware
app.use(router.routes());


// tell the app to listen on port 3001
console.log(`Now listening on http://0.0.0.0:${port}`);
await app.listen({ port });



// deno run --allow-net app.ts