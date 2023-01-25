const http = require("http");
const characters = require("../utils/data");
const PORT = 3001;

http
  .createServer((req, res) => {
    console.log(res);
  })
  .listen(PORT, "localhost");
