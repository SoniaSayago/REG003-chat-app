"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("../controller/user.controller");
exports.default = (function (app, next) {
    app.get('/users', user_controller_1.getUsersController);
    // app.get('/users/:uid', requireAuth, getOneUser);
    // app.post('/users', requireAdmin, newUser);
    // app.put('/users/:uid', requireAuth, updateUser);
    // app.delete('/users/:uid', requireAuth, deleteOneUser);
});
//# sourceMappingURL=users.js.map