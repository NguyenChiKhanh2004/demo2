
const pool = require('../utils/connectDB');
const bcrypt = require('bcrypt');

const getAllBrands = async () => {
    const query = 'SELECT * FROM brands';
    const [rows] = await pool.execute(query);
    return rows;
};


    const createBrands = async (newBrands) => {
        const { name } = newBrands;
        const query = 'INSERT INTO brands (NAME) VALUES (?)';
        const result = await pool.execute(query, [name,]);
        return result[0];
};

// const checkDienthoai = async (username) => {
   
// };

const updateBrands = async()=>{
    const query = " UPDATE brands SET NAME = ?WHERE id=?"
    const [rows, fields] = await pool.execute(query);
    return rows;

}

const deleteBrands =async()=>{
    const query = " DELETE FROM brands WHERE id=?"
    const [rows, fields] = await pool.execute(query);
    return rows;
}


module.exports = {
    getAllBrands, createBrands, updateBrands, deleteBrands
};
