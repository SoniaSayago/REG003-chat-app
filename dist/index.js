"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressApp = void 0;
// import {Pool} from "pg";
var routes_1 = __importDefault(require("./routes"));
var express_1 = __importStar(require("express"));
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
exports.expressApp.use(express_1.json());
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