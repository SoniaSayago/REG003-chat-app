"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_controller_1 = require("../controller/auth.controller");
exports.default = (function (app, nextMain) {
    app.post('/', auth_controller_1.authenthicateUser);
    return nextMain();
});
//# sourceMappingURL=auth.js.map