const pool = require('../utils/connectDB');
const brypt = require('bcrypt');

const getAll = async () => {
    const query = 'SELECT * FROM discounts'
    const [rows, fields] = await pool.execute(query);
    return rows;
}

const createDiscounts = async (newDiscount) => {
    const {
        product_id,
        code,
        discount_type,
        discount_value,
        start_date,
        end_date
    } = newDiscount;

    const query = 'INSERT INTO discounts (product_id, code, discount_type, discount_value, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?)';
    const results = await pool.execute(query, [product_id, code, discount_type, discount_value, start_date, end_date]);
    return results[0];
}

const updateDiscounts = async (id, updateDiscounts) => {
    const {
        product_id,
        code,
        discount_type,
        discount_value,
        start_date,
        end_date
    } = updateDiscounts;

    const query = 'UPDATE discounts SET product_id = ?, code = ?, discount_type = ?, discount_value = ?, start_date = ?, end_date = ? WHERE id = ?';
    const results = await pool.execute(query, [product_id, code, discount_type, discount_value, start_date, end_date, id]);
    return results[0];
};

const deleteDiscounts = async (id) => {
    const query = 'DELETE FROM discounts WHERE id = ?';
    const [results] = await pool.execute(query, [id]);
    return results;
};

const getDiscountsByProductId = async (id) => {
    const query = 'SELECT * FROM discounts WHERE product_id = ?';
    const [rows, fields] = await pool.execute(query, [id]);
    return rows;
}

module.exports = {
    getAll,
    createDiscounts,
    updateDiscounts,
    deleteDiscounts,
    getDiscountsByProductId
};
