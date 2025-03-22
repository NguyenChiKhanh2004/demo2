const pool = require('../utils/connectDB');
const bcrypt = require('bcrypt');

const getAll = async () => {
    const query = 'SELECT * FROM users'
    const [rows, fields] = await pool.execute(query);
    return rows;
}

const checkuser = async (username) => {
    const query = 'SELECT * FROM users WHERE phone = ?';
    const [rows, fields] = await pool.execute(query, [username]);
    return rows;
}

const createUsers = async (newUsers) => {
    const { phone, password, email, full_name, role, status } = newUsers;
    console.log(newUsers);
    const newpass = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (phone, password, email, full_name, role, status) VALUES (?, ?, ?, ?, ?, ?)';
    const result = await pool.execute(query, [phone, newpass, email, full_name, role, status]);
    return result[0];
};



const updateUsers = async (id, updatedUser) => {
    const { phone, password, email, full_name, role, status } = updatedUser;
    const newpass = password ? await bcrypt.hash(password, 10) : undefined;
    const query = `
        UPDATE users 
        SET 
            phone = ?, 
            password = COALESCE(?, password), 
            email = ?, 
            full_name = ?, 
            role = ?, 
            status = ? 
        WHERE id = ?
    `;
    const [rows] = await pool.execute(query, [phone, newpass, email, full_name, role, status, id]);
    return rows;
};

const deleteUsers =async()=>{
    const query = " DELETE FROM users WHERE id=?"
    const [rows, fields] = await pool.execute(query);
    return rows;
}

const getUsersById = async (id) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    const [rows] = await pool.execute(query, [id]);
    return rows[0];
};

module.exports = {
    getUsersById,
    getAll,
    createUsers,
    checkuser,
    updateUsers,
    deleteUsers
};
