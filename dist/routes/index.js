"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var users_1 = __importDefault(require("./users"));
var root = function (app, next) {
    app.get('/', function (req, res) { return res.json({ name: config_1.name, version: config_1.version }); });
    // app.all('*', (req:Request, res:Response, nextAll) => nextAll(404));
    return next();
};
var register = function (app, routes, cb) {
    if (!routes.length) {
        return cb();
    }
    routes[0](app, function (err) {
        if (err) {
            return cb(err);
        }
        return register(app, routes.slice(1), cb);
    });
};
exports.default = (function (app, next) { return register(app, [
    // auth,
    users_1.default,
    root,
], next); });
//# sourceMappingURL=index.js.map