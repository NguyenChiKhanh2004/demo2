const pool = require('../utils/connectDB');
const brypt = require('bcrypt');

const getAll = async () => {
    const query = 'SELECT * FROM users'
    const [rows, fields] = await pool.execute(query);
    return rows;
}

const createUser = async (newUser) => {
    const {username, password, email} = newUser;
    const newpass = await brypt.hash(password, 10);
    const query = 'INSERT INTO users (username, password, email, phone, full_name, role, status) VALUES (?, ?, ? ,? , ?, ?, ?)';
    const results = await pool.execute(query, [username, newpass, email]);
    return results[0];
}

const checkuser = async (username) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    const [rows, fields] = await pool.execute(query, [username]);
    return rows;
}


const updateUsers = async()=>{
    const query = " UPDATE users SET USERNAME = ?, PASSWORD = ?, EMAIL = ?, PHONE = ?, FULL_NAME = ?, ROLE = ?, STATUS = ? WHERE id=?"
      const [rows, fields] = await pool.execute(query);
      return rows;
  }
  
  const deleteUsers =async()=>{
      const query = " DELETE FROM users WHERE id=?"
      const [rows, fields] = await pool.execute(query);
      return rows;
  }


module.exports = {
    getAll,
    createUser,
    checkuser,
    updateUsers,
    deleteUsers
};
