"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("./auth"));
var config_1 = require("../config");
var root = function (app, next) {
    app.get('/', function (req, res) { return res.json({ name: config_1.name, version: config_1.version }); });
    app.all('*', function (req, res, nextAll) { return nextAll(404); });
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
    auth_1.default,
    root,
], next); });
//# sourceMappingURL=index.js.map