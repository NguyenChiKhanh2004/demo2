const pool = require('../utils/connectDB');
const bcrypt = require('bcrypt');

const getAll = async () => {
    const query = 'SELECT * FROM users'
    const [rows, fields] = await pool.execute(query);
    return rows;
}

const checkuser = async (username) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    const [rows, fields] = await pool.execute(query, [username]);
    return rows;
}



const createUsers = async (newUsers) => {
    const { username, password, email, phone, full_name, role, status} = newUsers;
    console.log(newUsers);
    const newpass = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (USERNAME, PASSWORD, EMAIL, PHONE, FULL_NAME, ROLE , STATUS) VALUES (?, ?, ?,?,?,?,?)';
    const result = await pool.execute(query, [username, newpass, email, phone, full_name, role, status]);
    return result[0];
};



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
    createUsers,
    checkuser,
    updateUsers,
    deleteUsers
};
