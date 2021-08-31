import db from '../lib/database'

export const createUser =(name: string, email: string, password: string) =>{ 
  return db('INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *', [name, email, password])
}

export const getUsers =() =>{ 
  return db('SELECT * FROM users',[])
}

export const getUserByName =(name: string) =>{ 
  return db('SELECT * FROM users WHERE name = $1',[name])
}

export const updateUserByName =(name: string, password: string, id: string) =>{   
  return db('UPDATE users SET name = $1, password = $2 WHERE id = $3',[name, password, id])
}

export const deleteUserByName =( id: string) =>{   
  return db('DELETE FROM users WHERE id = $1',[ id])
}
