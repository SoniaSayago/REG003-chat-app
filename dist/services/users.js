"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserByName = exports.updateUserByName = exports.getUserByName = exports.getUsers = exports.createUser = void 0;
var database_1 = __importDefault(require("../lib/database"));
var createUser = function (name, email, password) {
    return database_1.default('INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *', [name, email, password]);
};
exports.createUser = createUser;
var getUsers = function () {
    return database_1.default('SELECT * FROM users', []);
};
exports.getUsers = getUsers;
var getUserByName = function (name) {
    return database_1.default('SELECT * FROM users WHERE name = $1', [name]);
};
exports.getUserByName = getUserByName;
var updateUserByName = function (name, password, id) {
    return database_1.default('UPDATE users SET name = $1, password = $2 WHERE id = $3', [name, password, id]);
};
exports.updateUserByName = updateUserByName;
var deleteUserByName = function (id) {
    return database_1.default('DELETE FROM users WHERE id = $1', [id]);
};
exports.deleteUserByName = deleteUserByName;
//# sourceMappingURL=users.js.map