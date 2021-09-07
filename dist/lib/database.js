"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var connectionString = process.env.DATABASE_URL;
// conf. de api PosgreSQL
var pool = new pg_1.Pool({
    connectionString: connectionString
});
exports.default = (function (texto, params) {
    return pool.query(texto, params);
});
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
//# sourceMappingURL=database.js.map