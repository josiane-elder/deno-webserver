# deno-webserver

## How does deno differ from node
#### Secure by default
node is not a secure runtime environment
most of us as developers have root or admin access on our machines
would be easy for an npm package with bad intentions to make some damage to a machine or production environment
the browser isn't like this, it needs to be grandted explicit rights to access things like location, camera, or even receive a notification
> Deno is secure by default - no programs have access to your filesystem, make an http call or perform other i/o activities - you have to explicitly grant it access. Meaning that by default, it's secure, and you have to opt out of that if you don't want it.

### Dependency hell
dependencies are hard! because dependencies have dependencies which also dependencies...
each of those dependencies could have bugs or security flaws, and those become your responsibility once you bring them into your project
this is the job of dependency managers, to keep track of what version of what package works with what other packages so that when one dependency gets updated, the whole project doesn't break
this is what package-lock.json and yarn.lock do
npm is the central package repository for Node - nearly the entire community is served by npm
GitHub stepped in and purchased npm when they had issues generating enough revenue to stay afloat (cloud bandwith is expensive!)
npm is thus a single point of failure owner by a corporation - some people don't feel great anout that
the entire node_modules folder (which is often very very large) needs to be present when a Node.js app is deployed to run on a server
> Deno aims to solve this by making the build asset an executable, instead of needing thousands of files to run a project

### Typescript first
dynamic languages like JS and python are good for prototyping and scientific computing, but complex systems need a structured language with a type system
JavaScript is great because there is no one good way of doing things - it is whatever you need it to be
JavaScript sucks because there is no one good way of doing things - it's harder for organizations to standardize JS because thye need to invent their own patterns
strongly typed object-oriented languages have an accepted set of patterns
typescript has built-in documentation that helps you use apis in different packages - so TS enables better tooling, especially when using a library you haven't written
TS doesn't work with node, it needs to be transpiled first
To transpile a TS project to JS, it generates a transpiled file with a .js extension for each .ts file.
> Deno supports TS as a first-class citizen, so you don't need a transpilation step like you would for a node app.
