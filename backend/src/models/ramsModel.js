
const pool = require('../utils/connectDB');
const bcrypt = require('bcrypt');

const getAllRams = async () => {
    const query = 'SELECT * FROM rams';
    const [rows] = await pool.execute(query);
    return rows;
};


const createRams = async (newRams) => {
    const { size } = newRams;
    const query = 'INSERT INTO rams (SIZE) VALUES (?)';
    const result = await pool.execute(query, [size,]);
    return result[0];
};

// const checkDienthoai = async (username) => {
   
// };

const updateRams = async()=>{
  const query = " UPDATE rams SET SIZE = ? WHERE id=?"
    const [rows, fields] = await pool.execute(query);
    return rows;

}

const deleteRams =async()=>{
   const query = " DELETE FROM rams WHERE id=?"
    const [rows, fields] = await pool.execute(query);
    return rows;
}


module.exports = {
    getAllRams, createRams, updateRams, deleteRams
};
