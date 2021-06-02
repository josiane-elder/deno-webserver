// the Express generator puts all the routes in files that correspond to their base route
// let's move our routes to their own folder
// we'll need these dependencies troughout the app
// so we'll move them here so we can easily import them

// import Router and Application objects from the oak library
import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";

export { Application, Router, Context };