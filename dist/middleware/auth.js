"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = require('../models/user');
// export default(secret: string) => (req:Request, resp:Response, next: NextFunction) => {
//   const { authorization } = req.headers;
//   if (!authorization) { 
//     return next();
//   }
//   const [type, token] = authorization.split(' ');
//   if (type.toLowerCase() !== 'bearer') {
//     return next();
//   }
//   jwt.verify(token, secret, (err, decodedToken) => {
//     if (err) {
//       return next(403);
//     }
//     // TODO: Verificar identidad del usuario usando `decodeToken.uid`
//     const userFind = User.findById(decodedToken.uid);
//     userFind.then((doc) => {
//       if (doc) {
//         req.authToken = decodedToken;
//         console.info('AUTHTOKEN ', req.authToken);
//         return next();
//       }
//       console.info('El usuario del token es inválido');
//     });
//   });
// };
// export const isAuthenticated = (req:Request) => (
//   // console.info('isadmin', req.authToken)
//   req.authToken.uid
//   // TODO: decidir por la informacion del request si la usuaria esta autenticada
// );
// export const isAdmin = (req:Request) => (
//   // TODO: decidir por la informacion del request si la usuaria es admin
//   req.authToken.role.admin
// );
// export const requireAuth = (req:Request, resp:Response, next) => (
//   (!module.exports.isAuthenticated(req))
//     ? next(401)
//     : next()
// );
// export const requireAdmin = (req:Request, resp:Response, next) => (
//   (!module.exports.isAuthenticated(req))
//     ? next(401)
//     : (!module.exports.isAdmin(req))
//       ? next(403)
//       : next()
// );
//# sourceMappingURL=auth.js.map