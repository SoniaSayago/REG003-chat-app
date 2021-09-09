"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpErrors = {
    400: 'Bad request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not found',
    500: 'Internal server error',
};
exports.default = (function (err, req, resp, next) {
    var statusCode = (err === null || err === void 0 ? void 0 : err.statusCode) || 500;
    var message = (err === null || err === void 0 ? void 0 : err.message) || httpErrors[statusCode] || err;
    if (statusCode === 500) {
        console.error(statusCode, message);
    }
    resp.status(statusCode).json({ statusCode: statusCode, message: message });
    next();
});
//# sourceMappingURL=error.js.map