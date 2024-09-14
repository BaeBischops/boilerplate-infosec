const express = require('express');
const helmet = require('helmet');
const app = express();

// Use helmet to remove X-Powered-By header
app.use(helmet.hidePoweredBy());

// Set the X-Frame-Options header to DENY to prevent clickjacking
app.use(helmet.frameguard({action: 'deny'}));

// Use XSS filter to prevent XSS attacks
//app.use(helmet.xssFilter());

// Your routes and other middleware
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Use helmet.noSniff() to prevent MIME type sniffing
app.use(helmet.noSniff());

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});








































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
