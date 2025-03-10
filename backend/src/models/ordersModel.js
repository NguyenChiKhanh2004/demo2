const pool = require('../utils/connectDB');
const brypt = require('bcrypt');

const getAll = async () => {
    const query = 'SELECT * FROM orders'
    const [rows, fields] = await pool.execute(query);
    return rows;
}


const createOrders= async (newOrder) => {
    const {
        user_id,
        order_date,
        status,
        payment_status,
        total,
        shipping_address,
        billing_address,
        tracking_number,
        notes
    } = newOrder;

    const query = 'INSERT INTO orders (user_id, order_date, status, payment_status, total, shipping_address, billing_address, tracking_number, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const results = await pool.execute(query, [user_id, order_date, status, payment_status, total, shipping_address, billing_address, tracking_number, notes]);
    return results[0];
   
}

const updateOrders= async (id, updateOrders) => {
    const {
        user_id,
        order_date,
        status,
        payment_status,
        total,
        shipping_address,
        billing_address,
        tracking_number,
        notes
    } = updateOrders;

    const query = 'UPDATE orders SET user_id = ?, order_date = ?, status = ?, payment_status = ?, total = ?, shipping_address = ?, billing_address = ?, tracking_number = ?, notes = ? WHERE id = ?';
    const results = await pool.execute(query, [user_id, order_date, status, payment_status, total, shipping_address, billing_address, tracking_number, notes, id]);
    return results[0];
};

const deleteOrders= async (id) => {
    const query = 'DELETE FROM orders WHERE id = ?';
    const [results] = await pool.execute(query, [id]);
    return results; 
};

const getOrdersByUserId = async (id) => {
    const query = 'SELECT * FROM orders WHERE user_id = ?';
    const [rows, fields] = await pool.execute(query, [id]);
    return rows;
}


module.exports = {
    getAll,
    createOrders,
    updateOrders,
    deleteOrders,
    getOrdersByUserId
};
