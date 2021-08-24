"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
http_1.default.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Heroku world!");
    response.end();
}).listen(process.env.PORT);
console.log(process.env.PORT);
//# sourceMappingURL=index.js.map