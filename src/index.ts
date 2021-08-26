// import http from "http";
import dotenv from "dotenv";
import express from "express";
dotenv.config()

const expressApp = express();
const port = process.env.PORT || 3000;
expressApp.get("/", (req, res) => {
    res.send("Hello World!");
});

expressApp.listen(port, () => {   
    console.log(`Listening on port ${port}`);
});


// http.createServer(function(request: http.IncomingMessage, response: http.ServerResponse) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Heroku world!");
//   response.end();
// }).listen(process.env.PORT);