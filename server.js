// Incorporate express module to file
const express = require("express");

// Bind function that represents express module
const app = express();

// Create port number
const port = 3002;

// What should happen when someone makes a get request to the home root
app.get("/", function(request, response){
    // What to do when the request to the home root occurs
    response.send("<h1>Hello, World!</h1>");
})

// Listen on a specific port for any http request that gets sent to this server
app.listen(port, function(){
    console.log("Server started on port " + port);
});

