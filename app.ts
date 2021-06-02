  // how to parse route params such as /:name ?
    // there is a node package (route-parser) that can do this for us
    // but how to get this in deno? (where's the url)??

    // if a package is isomorphic (works in the browser) 
    // should be able to use it with deno

    // there are some services that allow to import a package from npm via URL
    // this won't work in deno because it uses commonJS syntax 
    // is module.exports = Route;
    // deno only supports es modules

    // tere is a service called jpsm that takes a module by url and gives a esmodule compatible import/export


import routeParser from "https://dev.jspm.io/route-parser@0.0.5";
// inport ts types for route parser
import RouteParser from "https://unpkg.com/@types/route-parser@0.1.3/index.d.ts";
import { serve } from 'https://deno.land/std/http/server.ts';

const Route = routeParser as typeof RouteParser;

const PORT = 3001;
const HOSTNAME = "0.0.0.0";

const server = serve({ hostname: HOSTNAME, port: PORT });

// use an infinite for loop to handly any requests that come in 
// by setting the response property on the request

// start the server and listen for incoming requests
console.log(`Server is now running on: ttp://${HOSTNAME}:${PORT}`);

const route = new Route("/:name");

// return html
for await (const req of server) {
  
    const match: any = route.match(req.url);

    // check to see if the name was passed in
    // if not, throw a 500 error
    if (match.name) {
        req.respond({ 
            body: `Hello, ${match.name}`,
        });
    } else {
        req.respond({ 
            body: "Please pass a route name.",
        });
    }
  
}


// deno run --allow-net=0.0.0.0:3001 app.ts
// http://localhost:3000?name=World



