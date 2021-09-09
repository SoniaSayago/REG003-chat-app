import {Pool, QueryResult} from "pg";

const connectionString = process.env.DATABASE_URL 

// conf. de api PosgreSQL
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized : false,
  }
})

const createTableText = `
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
);
`
// connection using created pool
pool.connect(function(err, client, done) {
  client.query(createTableText)
  done()
})

pool.on('connect', () => {
  console.log('DB connected succesfully !');
});

pool.query(createTableText);

export default async (texto: string, params: string[]) => {
  // await pool.query("SET search_path TO 'chatSchema';");
  return pool.query(texto, params) 
}

  // pool.query('SELECT NOW()', (err, res) => {
  //   console.log(err, res)
  //   pool.end()
  // })