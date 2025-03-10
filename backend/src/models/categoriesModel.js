const pool = require('../utils/connectDB');
const bcrypt = require('bcrypt');

const getAllCategories = async () => {
    const query = 'SELECT * FROM categories';
    const [rows] = await pool.execute(query);
    return rows;
};


    const createCategories = async (newCategories) => {
        const { name, description } = newCategories;
        const query = 'INSERT INTO categories (NAME, DESCRIPTION) VALUES (?, ?)';
        const result = await pool.execute(query, [name,description]);
        return result[0];
};

// const checkDienthoai = async (username) => {
   
// };

const updateCategories = async()=>{
    const query = " UPDATE categories SET NAME = ?, DESCRIPTION = ? WHERE id=?"
    const [rows, fields] = await pool.execute(query);
    return rows;

}

const deleteCategories =async()=>{
    const query = " DELETE FROM categories WHERE id=?"
    const [rows, fields] = await pool.execute(query);
    return rows;
}

const getCategoriesById = async (id) => {
    const query = 'SELECT * FROM categories WHERE id = ?';
    const [rows] = await pool.execute(query, [id]);
    return rows[0];
};


module.exports = {
    getAllCategories, createCategories, updateCategories, deleteCategories, getCategoriesById
};
