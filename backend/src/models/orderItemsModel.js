const pool = require('../utils/connectDB');
const brypt = require('bcrypt');

const getAll = async () => {
    const query = 'SELECT * FROM order_items'
    const [rows, fields] = await pool.execute(query);
    return rows;
}

const createOrderItems= async (newOrderItem) => {
    const {
        order_id,
        variant_id,
        quantity,
        price
    } = newOrderItem;

    const query = 'INSERT INTO order_items (order_id, variant_id, quantity, price) VALUES (?, ?, ?, ?)';
    const results = await pool.execute(query, [order_id, variant_id, quantity, price]);
    return results[0];
}

const updateOrderItems= async (id, updateOrderItems) => {
    const {
        order_id,
        variant_id,
        quantity,
        price
    } = updateOrderItems;

    const query = 'UPDATE order_items SET order_id = ?, variant_id = ?, quantity = ?, price = ? WHERE id = ?';
    const results = await pool.execute(query, [order_id, variant_id, quantity, price, id]);
    return results[0];
};

const deleteROrderItems= async (id) => {
    const query = 'DELETE FROM order_items WHERE id = ?';
    const [results] = await pool.execute(query, [id]);
    return results;
};
const getOrderItemsByOrderId = async (id) => {
    const query = 'SELECT * FROM order_items WHERE order_id = ?';
    const [rows, fields] = await pool.execute(query, [id]);
    return rows;
}


module.exports = {
    getAll,
    createOrderItems,
    updateOrderItems,
    deleteROrderItems,
    getOrderItemsByOrderId
};
