/*

This is the primary file for the API





*/

// Dependencies

const http = require('http');
const url = require('url');

// The servcer should respond to all requests with a string
var server = http.createServer(function(req, res) {

  // get the URL and parse it
  var parsedUrl = url.parse(req.url, true);

  // Get the path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, '');


  // Get the query string as an object

  var queryStringObject = parsedUrl.query;

  // Get the HTTP method
  var method = req.method.toUpperCase();


  // Send the response
  res.end('Hello world\n');


  // Log the path
  console.log('Requed is received on path: ' + trimmedPath + 'with this method: ' + method + ' with these query sring params: ', queryStringObject);


});



// Start the server and have it listen to port 3000
server.listen(3000, function(){
  console.log('The server is listening in port 3000');
});