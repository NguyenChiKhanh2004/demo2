
const pool = require('../utils/connectDB');
const bcrypt = require('bcrypt');

const getAllColors = async () => {
    const query = 'SELECT * FROM colors';
    const [rows] = await pool.execute(query);
    return rows;
};


const createColors = async (newColorss) => {
    const { name } = newColorss;
    const query = 'INSERT INTO colors (NAME) VALUES (?)';
    const result = await pool.execute(query, [name,]);
    return result[0];
};

// const checkDienthoai = async (username) => {
   
// };

const updateColors = async()=>{
  const query = " UPDATE colors SET NAME = ? WHERE id=?"
    const [rows, fields] = await pool.execute(query);
    return rows;

}

const deleteColors =async()=>{
   const query = " DELETE FROM colors WHERE id=?"
    const [rows, fields] = await pool.execute(query);
    return rows;
}


module.exports = {
    getAllColors, createColors, updateColors, deleteColors
};
