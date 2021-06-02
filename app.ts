// node has express
// deno has oak -- modelled after koa, which is the successor of express
// koa is a web framework for node built on the concept of generators
// oak does not come with middleware the same way koa does

// import Application object from the oak library
import { Application } from "https://deno.land/x/oak/mod.ts";

// create new instance of the Application class
const app = new Application();
const port = 3001;

// define a handler for the requesr
// app.use is middleware - its a function that lets you do things with the request, and they will execute in order
// ctx -- current context
// next -- deno is waiting for next to be called before resolving the request
// next runs the next piece of middleware, which sets of 
app.use((ctx, next) => {
    ctx.response.body = "Hello World";
});

console.log(`Now listening on http://0.0.0.0:${port}`)
app.listen(`0.0.0.0:${port}`)

// tell the app to listen on port 3001
console.log(`Now listening on http://0.0.0.0:3001`);
await app.listen({ port });

// deno run --allow-net --watch --unstable app.ts