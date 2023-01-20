const express = require("express");
const app = express();
const path = require('path');

// app.get("/*", function (req, res) {
//    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// })

app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});