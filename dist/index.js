"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressApp = void 0;
// import {Pool} from "pg";
var routes_1 = __importDefault(require("./routes"));
var express_1 = __importDefault(require("express"));
var config_1 = require("./config");
var error_1 = __importDefault(require("./middleware/error"));
// const connectionString = process.env.DATABASE_URL 
// // conf. de api PosgreSQL
// const pool = new Pool({
//   connectionString
// })
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
// Conf. de servidor
exports.expressApp = express_1.default();
// expressApp.get("/", (req, res) => {
//     res.send("Hello World!");
// });
// Registrar rutas
routes_1.default(exports.expressApp, function (err) {
    if (err) {
        throw err;
    }
    exports.expressApp.use(error_1.default);
    exports.expressApp.listen(config_1.port, function () {
        console.info("App listening on port " + config_1.port);
    });
});
//# sourceMappingURL=index.js.map