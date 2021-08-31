"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
dotenv_1.default.config();
var connectionString = process.env.DATABASE_URL;
// conf. de api PosgreSQL
var pool = new pg_1.Pool({
    connectionString: connectionString
});
pool.query('SELECT NOW()', function (err, res) {
    console.log(err, res);
    pool.end();
});
// Conf. de servidor
var expressApp = express_1.default();
var port = process.env.PORT || 3000;
expressApp.get("/", function (req, res) {
    res.send("Hello World!");
});
expressApp.listen(port, function () {
    console.log("Listening on port " + port);
});
//# sourceMappingURL=index.js.map