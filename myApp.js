const express = require('express');
const helmet = require('helmet');
const app = express();

// Use Helmet middleware
app.use(helmet());

// Use helmet to remove X-Powered-By header
app.use(helmet.hidePoweredBy());

// Read PORT from environment variables, default to 3000 if not set
const port = process.env.PORT || 3000;

// Your routes and other middleware
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

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
