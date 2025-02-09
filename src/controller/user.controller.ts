import { Request, Response, NextFunction } from 'express';
import db from "../lib/database";

// GET '/users'
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await db('SELECT * FROM users', []);
    return res.status(200).json(response.rows);
  } catch (err: any) {
    console.log(err);

    next({
      statusCode: err?.statusCode || 500,
      message: err?.message || 'Opps! Something went wrong.',
    });
  }
};

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
export const getOneUser = async (req:Request, resp:Response, next: NextFunction) => {
  try {
    const { email, password: psw } = req.body
    const response = await db('SELECT * FROM users WHERE email=$1', [email]);
    if (response.rows.length === 0) {
      return next(404);
    }
    
    const { password, ...user } = response.rows[0];

    if (password !== psw) return next(403);

    return resp.status(200).json(user);
  } catch (err: any) {
    console.log(err);
    next({
      statusCode: err?.statusCode || 500,
      message: err?.message || 'Opps! Something went wrong.',
    });
  }
};

// // POST '/users'

export const newUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body
    const response = await db('INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *', [name, email, password]);
    return res.status(201).json(response.rows);
  } catch (err) {
    next({
      statusCode: err?.statusCode || 500,
      message: err?.message || 'Opps! Something went wrong.',
    });
  }
};

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


