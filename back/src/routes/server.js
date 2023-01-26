const http = require("http");
const getCharById = require("../controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const entireUrl = req.url.split("/");
    const id = entireUrl.pop();
    const url = entireUrl.join("/");
    if (url.includes("onsearch")) {
      getCharById(res, id);
    }
  })
  .listen(3001, "localhost");
