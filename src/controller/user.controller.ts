// import { createUser, getUsers} from '../services/users'
import { Request, Response, NextFunction } from 'express';
import db from "../lib/database"
import { QueryResult } from 'pg';

interface NewUser {
     name?: string, password?: string, email?: string
  }

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

// const getOneUser = async (req:Request, resp:Response, next: NextFunction) => {
//   try {
//     const user = await User.findOne({ _id: req.params.uid });
//     res.status(200).json(
//       {
//         _id: user._id,
//         email: user.email,
//         password: user.password,
//         roles: user.roles,
//       },
//     );
//   } catch (err) {
//     next(err);
//   }
// };

// // POST '/users'

// const newUser = async (req:Request, resp:Response, next: NextFunction) => {
//   try {
//     const { name, email, password } = req.body
//     const newUser = await createUser(name, email, password);
//     console.log(newUser);
//     resp.status(200).json(
//       {
//         // _id: newUser.name,
//         // email: newUser.email,
//         // password: newUser.password,
//         message: 'User created successfully',
//       },
//     );
//   } catch (err) {
//     next(err);
//   }
// };

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

// export{
//   getUsers,
//   newUser,
//   // updateUser,
//   // getOneUser,
//   // deleteOneUser,
// };
