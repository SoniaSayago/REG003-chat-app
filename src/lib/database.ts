import {Pool, QueryResult} from "pg";

const connectionString = process.env.DATABASE_URL 

// conf. de api PosgreSQL
const pool = new Pool({
  connectionString
})

export default (texto: string, params: string[]) => {
  return pool.query(texto, params) 
}

  // pool.query('SELECT NOW()', (err, res) => {
  //   console.log(err, res)
  //   pool.end()
  // })