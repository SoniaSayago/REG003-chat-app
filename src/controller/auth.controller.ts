import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { secret } from '../config';
import { Request, Response, NextFunction } from 'express';

export const authenthicateUser = (req:Request, res:Response, next:NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(400);
  }

  // TODO: autenticar a la usuarix
  // const userFind = User.findOne({ email });

  // userFind.then((doc) => {
  //   if (!doc) {
  //     return res.status(400).json({
  //       message: 'User Not Exist',
  //     });
  //   }
  //   bcrypt.compare(password, doc.password, (err, data) => {
  //     // if error than throw error
  //     if (err) throw err;

  //     // if both match than you can do anything
  //     else if (!data) {
  //       return res.status(400).json({
  //         message: 'Incorrect Password !',
  //       });
  //     }

  //     jwt.sign(
  //       {
  //         uid: doc._id,
  //         email: doc.email,
  //         role: doc.roles,
  //       },
  //       secret,
  //       {
  //         expiresIn: 3600,
  //       },
  //       (err, token) => {
  //         if (err) throw err;
  //         return res.status(200).json({
  //           token,
  //         });
    //     },
    //   );
    // });
  // });
};
