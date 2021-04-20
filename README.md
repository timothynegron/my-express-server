# my-express-server

### References

1. [Express JS Website](https://expressjs.com/)
2. [Hello World Example](http://expressjs.com/en/starter/hello-world.html#hello-world-example)

### Topics Covered

1. Creating an express server

### `Step 1`

Create a server.js file

### `Step 2`

Run `npm init` command

### `Step 3`

Run `npm install express` command

### `Step 4`

Create `const express = require("express");`
* Incorporate express to server.js file

### `Step 5`

Create `const app = express();`
* A function that represents the express module
* Bind it to the word app

### `Step 6`

Create `const port = 3000;`
* Port number

### `Step 7`

Call `app.listen(port)`
* Listen to this port for any http request that get sent to this server
* Server will tune into the channel `port`

### `Step 8`

On browser type `localhost:3000`
* Browser makes get request will see `Cannot GET /`