import { serve } from 'https://deno.land/std/http/server.ts';
const PORT = 3001;
const HOSTNAME = "0.0.0.0";

const server = serve({ hostname: HOSTNAME, port: PORT });

// use an infinite for loop to handly any requests that come in 
// by setting the response property on the request

// start the server and listen for incoming requests
console.log(`Server is now running on: ttp://${HOSTNAME}:${PORT}`);

for await (const req of server) {
    req.respond({ 
        body: "Hello World",
    });
}

// run with deno run app.ts
// need permissions so add flag --allow-net
// deno run --allow-net=0.0.0.0:3001 app.ts

// our server is now running!
