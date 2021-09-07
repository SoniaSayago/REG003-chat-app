"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.name = exports.secret = exports.dbUrl = exports.port = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.port = process.env.PORT;
exports.dbUrl = process.env.DATABASE_URL;
exports.secret = process.env.JWT_SECRET || "";
exports.name = process.env.npm_package_name || "";
exports.version = process.env.npm_package_version || "";
//# sourceMappingURL=config.js.map