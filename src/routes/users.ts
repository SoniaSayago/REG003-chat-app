import{getUsers} from "../controller/user.controller";
import { Application} from 'express';


export default (app:Application, next:any) => {
  app.get('/users', getUsers);
  // // app.get('/users/:uid', requireAuth, getOneUser);
  // app.post('/users', newUser);

  // app.put('/users/:uid', requireAuth, updateUser);
  // app.delete('/users/:uid', requireAuth, deleteOneUser);
  next();
};
