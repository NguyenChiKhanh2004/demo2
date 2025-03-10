const pool = require('../utils/connectDB');
const brypt = require('bcrypt');

const getAll = async () => {
    const query = 'SELECT * FROM product_price_history'
    const [rows, fields] = await pool.execute(query);
    return rows;
}

const createProductPriceHistory = async (newProductPriceHistory) => {
    const {
        product_id,
        old_price,
        new_price
    } = newProductPriceHistory;

    const query = 'INSERT INTO product_price_history (product_id, old_price, new_price) VALUES (?, ?, ?)';
    const results = await pool.execute(query, [product_id, old_price, new_price]);
    return results[0];
}

const updateProductPriceHistory = async (id,updateProductPriceHistory) => {
    const {
        product_id,
        old_price,
        new_price
    } = updateProductPriceHistory;

    const query = 'UPDATE product_price_history SET product_id = ?, old_price = ?, new_price = ? WHERE id = ?';
    const results = await pool.execute(query, [product_id, old_price, new_price, id]);
    return results[0];
};

const deleteProductPriceHistory = async (id) => {
    const query = 'DELETE FROM product_price_history WHERE id = ?';
    const [results] = await pool.execute(query, [id]);
    return results;
    
};
const getProductPriceHistoryByProductId = async (id) => {
    const query = 'SELECT * FROM product_price_history WHERE product_id = ?';
    const [rows, fields] = await pool.execute(query, [id]);
    return rows;
}


module.exports = {
    getAll,
    createProductPriceHistory,
    updateProductPriceHistory,
    deleteProductPriceHistory,
    getProductPriceHistoryByProductId
};
