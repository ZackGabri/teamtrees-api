const express = require('express');
const app = express();
const http = require('http')
require("./api/routes/routes.js")(app);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(3000, console.log('Teamtrees API is listining on port: ' + 3000));