const express = require("express");
const open = require("open");

const app = express();

app.use(
  "",
  express.static(__dirname, {
    extensions: ["js", "html"]
  })
);
const port = 4930;
app.listen(port);
const url = `http://localhost:${port}`;
open(url);
console.log(`Starting a server on port: ${port}.
Navigate to ${url} to view the test.`);
