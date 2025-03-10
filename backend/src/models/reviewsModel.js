const pool = require('../utils/connectDB');
const brypt = require('bcrypt');

const getAll = async () => {
    const query = 'SELECT * FROM reviews'
    const [rows, fields] = await pool.execute(query);
    return rows;
}

const createReviews  = async (newReviews) => {
    const {
        product_id ,
        user_id ,
        rating ,
        title ,
        comment ,
        is_verified_purchase
    } = newReviews;

    const query = 'INSERT INTO reviews (product_id, user_id, rating, title, comment, is_verified_purchase) VALUES (?, ?, ?, ?, ?, ?)';
    const results = await pool.execute(query, [product_id, user_id, rating, title, comment, is_verified_purchase]);
    return results[0];  
}

const updateReviews = async (id, updateReviews) => {
    const {
        product_id ,
        user_id ,
        rating ,
        title ,
        comment ,
        is_verified_purchase
    } = updateReviews;

    const query = 'UPDATE reviews SET product_id = ?, user_id = ?, rating = ?, title = ?, comment = ?, is_verified_purchase = ? WHERE id = ?';
    const results = await pool.execute(query, [product_id, user_id, rating, title, comment, is_verified_purchase, id]);
    return results[0];
   
};

const deleteReviews = async (id) => {
    const query = 'DELETE FROM reviews WHERE id = ?';
    const [results] = await pool.execute(query, [id]);
    return results;
};

const getReviewsByProductId = async (id) => {
    const query = 'SELECT * FROM reviews WHERE product_id = ?';
    const [rows, fields] = await pool.execute(query, [id]);
    return rows;
}

module.exports = {
    getAll,
    createReviews,
    updateReviews,
    deleteReviews,
    getReviewsByProductId
};
