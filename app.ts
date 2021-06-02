import { serve } from 'https://deno.land/std/http/server.ts';
const PORT = 3001;
const HOSTNAME = "0.0.0.0";

const server = serve({ hostname: HOSTNAME, port: PORT });

// use an infinite for loop to handly any requests that come in 
// by setting the response property on the request

// start the server and listen for incoming requests
console.log(`Server is now running on: ttp://${HOSTNAME}:${PORT}`);

// return html
for await (const req of server) {
    // req.url holds the URL fragment = everything that comes after teh address and the port
    // you can use the browser URLSearchParams object to parse out query string params
    // take the substrig because a / gets appended by the browser
    const searchParameters = new URLSearchParams(req.url.substring(1));
    const name = searchParameters.get("name")


    // check to see if the name was passed in
    // if not, throw a 500 error
    if (name) {
        req.respond({ 
            body: "<h1>Hello World</h1>",
        });
    } else {
        req.respond({ 
            status: 500,
            body: "<p>The name parameter was not found on the request</p>",
        });
    }
  
}


// deno run --allow-net=0.0.0.0:3001 app.ts
// http://localhost:3000?name=World



