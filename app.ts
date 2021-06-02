import { Application, Router, Context } from './deps.ts';
import * as indexRouter from "./routes/indexRouter.ts";
import * as userRouter from "./routes/userRouter.ts";
// create new instance of the Application class
const app = new Application();

// create new instance of Router class
const router = new Router();

const port = 3001;

indexRouter.use("/", router);
userRouter.use("/users", router);

// tell the app to use the router as middleware
app.use(router.routes());


// tell the app to listen on port 3001
console.log(`Now listening on http://0.0.0.0:${port}`);
await app.listen({ port });



// deno run --allow-net app.ts