"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("../controller/user.controller");
exports.default = (function (app, next) {
    app.get('/users', user_controller_1.getUsers);
    app.post('/user', user_controller_1.getOneUser);
    app.post('/users', user_controller_1.newUser);
    // app.put('/users/:uid', requireAuth, updateUser);
    // app.delete('/users/:uid', requireAuth, deleteOneUser);
    next();
});
//# sourceMappingURL=users.js.map