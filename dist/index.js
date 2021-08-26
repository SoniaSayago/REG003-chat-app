"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import http from "http";
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
dotenv_1.default.config();
var expressApp = express_1.default();
var port = process.env.PORT || 3000;
expressApp.get("/", function (req, res) {
    res.send("Hello World!");
});
expressApp.listen(port, function () {
    console.log("Listening on port " + port);
});
// http.createServer(function(request: http.IncomingMessage, response: http.ServerResponse) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Heroku world!");
//   response.end();
// }).listen(process.env.PORT);
//# sourceMappingURL=index.js.map