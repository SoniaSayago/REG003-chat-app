// import {Pool} from "pg";
import routes from "./routes";
import express, {Application} from "express";
import { port } from './config';
import errorHandler from './middleware/error';

// const connectionString = process.env.DATABASE_URL 

// // conf. de api PosgreSQL
// const pool = new Pool({
//   connectionString
// })

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

// Conf. de servidor
export const expressApp:Application = express();

// expressApp.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// Registrar rutas
routes(expressApp, (err: string) => {
  if (err) {
    throw err;
  }

  expressApp.use(errorHandler);
  expressApp.listen(port, () => {
    console.info(`App listening on port ${port}`);
  });
});
