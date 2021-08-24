import http from "http";
import dotenv from "dotenv";
dotenv.config()

http.createServer(function(request: http.IncomingMessage, response: http.ServerResponse) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Heroku world!");
  response.end();
}).listen(process.env.PORT);