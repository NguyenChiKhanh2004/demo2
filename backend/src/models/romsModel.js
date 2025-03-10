
const pool = require('../utils/connectDB');
const bcrypt = require('bcrypt');

const getAllRoms = async () => {
    const query = 'SELECT * FROM roms';
    const [rows] = await pool.execute(query);
    return rows;
};


const createRoms = async (newRoms) => {
    const { size } = newRoms;
    const query = 'INSERT INTO roms (SIZE) VALUES (?)';
    const result = await pool.execute(query, [size,]);
    return result[0];
};

// const checkDienthoai = async (username) => {
   
// };

const updateRoms = async()=>{
  const query = " UPDATE roms SET SIZE = ? WHERE id=?"
    const [rows, fields] = await pool.execute(query);
    return rows;

}

const deleteRoms =async()=>{
   const query = " DELETE FROM roms WHERE id=?"
    const [rows, fields] = await pool.execute(query);
    return rows;
}


module.exports = {
    getAllRoms, createRoms, updateRoms, deleteRoms
};
