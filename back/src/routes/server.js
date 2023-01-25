const http = require("http");
const characters = require("../utils/data");
//const PORT = 3001;

http
  .createServer((req, res) => {
    const entUrl = req.url.split("/");
    const id = Number(entUrl.pop());
    const url = entUrl.join("/");
    if (url === "/rickandmorty/character") {
      const character = characters.find((ch) => ch.id === id);
      if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(character));
      } else {
        res.writeHead(404, { "Content-Type": "plain/text" });
        res.end("404: route not found");
      }
    }
  })
  .listen(3001, "localhost");
