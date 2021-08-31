import{getUsersController} from "../controller/user.controller";
import { Application} from 'express';


export default (app:Application, next:any) => {
  
  app.get('/users', getUsersController);

  // app.get('/users/:uid', requireAuth, getOneUser);
  
  // app.post('/users', requireAdmin, newUser);

  // app.put('/users/:uid', requireAuth, updateUser);
  // app.delete('/users/:uid', requireAuth, deleteOneUser);
};
