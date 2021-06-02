import { Router, Context } from '../deps.ts';

// use function accepts a path and a reference to the router object
// this allows us to pass in the path ew want the function to handle 
// and the router object defined in the app.ts file
// move the index route to this new file
export function use(path: string, router: Router) {
    router.get(`${path}`, async (ctx: Context) => {
        ctx.response.body = "Welcome to Oak";
    });
}


