// http://stackoverflow.com/questions/17149815/how-to-deploy-a-reveal-js-app-to-heroku
var express = require("express");
var morgan = require('morgan');
var app = express();
app.use(morgan());
app.use("/", express.static(__dirname));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
