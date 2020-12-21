const express = require('express')
const app = express()
var path = require("path");
var http = require("http");



// ===========================================================

var PORT = 3000;



// Start our server
app.listen(PORT, function() {

    // Callback triggered when server is successfully listening. Hurray
    console.log("App listening on PORT " + PORT);
  });
  
  

  // Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  // Create a function which handles incoming requests and sends responses
  function handleRequest(req, res) {
    response.end("It Works!! Path Hit: " + request.url);
};
var server = http.createServer(handleRequest);
    // Capture the url the request is made to
    var path = req.url;
 

 
