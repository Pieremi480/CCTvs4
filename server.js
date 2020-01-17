// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/api", function(request, response) {
  response.sendFile(__dirname + "/views/api.html");
});

app.get("/htmlGlitch", function(request, response) {
  response.sendFile(__dirname + "/views/htmlGlitch.html");
});

app.get("/bootstrap", function(request, response) {
  response.sendFile(__dirname + "/views/bootstrap.html");
});

app.get("/vidcodef", function(request, response) {
  response.sendFile(__dirname + "/views/vidcodef.html");
});

app.get("/vidcodep", function(request, response) {
  response.sendFile(__dirname + "/views/vidcodep.html");
});

app.get("/htmlwithjs", function(request, response) {
  response.sendFile(__dirname + "/views/htmlwithjs.html");
});

app.get("/otherPro", function(request, response) {
  response.sendFile(__dirname + "/views/otherPro.html");
});

app.get("/api", function(request, response) {
  response.sendFile(__dirname + "/views/api.html");
});

app.get("/log", function(request, response) {
  response.sendFile(__dirname + "/views/log.html");
});

app.get("/aboutMe", function(request, response) {
  response.sendFile(__dirname + "/views/aboutMe.html");
});

app.get("/signUp", function(request, response) {
  response.sendFile(__dirname + "/views/signUp.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
