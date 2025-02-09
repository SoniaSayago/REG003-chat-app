"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = exports.getOneUser = exports.getUsers = void 0;
var database_1 = __importDefault(require("../lib/database"));
// GET '/users'
var getUsers = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, database_1.default('SELECT * FROM users', [])];
            case 1:
                response = _a.sent();
                return [2 /*return*/, res.status(200).json(response.rows)];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                next({
                    statusCode: (err_1 === null || err_1 === void 0 ? void 0 : err_1.statusCode) || 500,
                    message: (err_1 === null || err_1 === void 0 ? void 0 : err_1.message) || 'Opps! Something went wrong.',
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
// export const getUsersController = async (req:Request, res:Response, next: NextFunction) => {
//   try {
//     const users = await getUsers();
// const listUser = [];
// users.forEach((user) => {
//   listUser.push({
//     _id: user._id,
//     email: user.email,
//     password: user.password,
//     roles: user.roles,
//   });
// });
//     res.status(200).json(users);
//   } catch (err) {
//     next({statusCode:500, message:err.message || 'Ups, have a problem with your request'});
//   }
// };
//   app.get('/users', requireAdmin, getUsers);
// GET '/users/:uid'
var getOneUser = function (req, resp, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, psw, response, _b, password, user, err_2;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, psw = _a.password;
                return [4 /*yield*/, database_1.default('SELECT * FROM users WHERE email=$1', [email])];
            case 1:
                response = _c.sent();
                if (response.rows.length === 0) {
                    return [2 /*return*/, next(404)];
                }
                _b = response.rows[0], password = _b.password, user = __rest(_b, ["password"]);
                console.log(user);
                if (password !== psw)
                    return [2 /*return*/, next(403)];
                return [2 /*return*/, resp.status(200).json(user)];
            case 2:
                err_2 = _c.sent();
                console.log(err_2);
                next({
                    statusCode: (err_2 === null || err_2 === void 0 ? void 0 : err_2.statusCode) || 500,
                    message: (err_2 === null || err_2 === void 0 ? void 0 : err_2.message) || 'Opps! Something went wrong.',
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getOneUser = getOneUser;
// // POST '/users'
var newUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, email, password, response, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name_1 = _a.name, email = _a.email, password = _a.password;
                return [4 /*yield*/, database_1.default('INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *', [name_1, email, password])];
            case 1:
                response = _b.sent();
                return [2 /*return*/, res.status(201).json(response.rows)];
            case 2:
                err_3 = _b.sent();
                next({
                    statusCode: (err_3 === null || err_3 === void 0 ? void 0 : err_3.statusCode) || 500,
                    message: (err_3 === null || err_3 === void 0 ? void 0 : err_3.message) || 'Opps! Something went wrong.',
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.newUser = newUser;
// // PUT '/users/:uid'
// const updateUser = async (req:Request, resp:Response, next: NextFunction) => {
//   try {
//     const user = await User.findById({ _id: req.params.uid });
//     user.email = req.body.email ? req.body.email : user.email;
//     user.password = req.body.password ? req.body.password : user.password;
//     user.roles = req.body.roles ? req.body.roles : user.roles;
//     const userSaved = await user.save({ validateBeforeSave: true });
//     res.status(200).json(
//       {
//         _id: user._id,
//         email: userSaved.email,
//         password: userSaved.password,
//         roles: userSaved.roles,
//       },
//     );
//   } catch (err) {
//     next(err);
//   }
// };
// // DELETE '/users/:uid'
// const deleteOneUser = async (req:Request, resp:Response, next: NextFunction) => {
//   try {
//     await User.findByIdAndDelete({ _id: req.params.uid });
//     res.json('User deleted =( ');
//   } catch (err) {
//     res.status(400).json(`Error: ${err}`);
//     next(err);
//   }
// };
//# sourceMappingURL=user.controller.js.map