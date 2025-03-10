// models/ProductVariantModel.js
const pool = require('../utils/connectDB');

const getAll = async () => {
    const query = 'SELECT * FROM product_variants';
    const [rows] = await pool.execute(query);
    return rows;
};

const createVariant = async (newVariant) => {
    const { product_id, color_id, ram_id, rom_id, sku, price, stock_status, image_url } = newVariant;
    const query = `
        INSERT INTO product_variants 
        (product_id, color_id, ram_id, rom_id, sku, price, stock_status, image_url) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [product_id, color_id, ram_id, rom_id, sku, price, stock_status, image_url];
    const [results] = await pool.execute(query, values);
    return results;
};

const checkVariant = async (product_id, color_id, ram_id, rom_id) => {
    const query = `SELECT * FROM product_variants WHERE product_id = ? AND color_id = ? AND ram_id = ? AND rom_id = ?`;
    const [rows] = await pool.execute(query, [product_id, color_id, ram_id, rom_id]);
    return rows;
};

const updateVariant = async (id, updatedVariant) => {
    const { product_id, color_id, ram_id, rom_id, sku, price, stock_status, image_url } = updatedVariant;
    const query = `
        UPDATE product_variants 
        SET product_id = ?, color_id = ?, ram_id = ?, rom_id = ?, sku = ?, price = ?, stock_status = ?, image_url = ?, updated_at = CURRENT_TIMESTAMP 
        WHERE id = ?
    `;
    const values = [product_id, color_id, ram_id, rom_id, sku, price, stock_status, image_url, id];
    const [results] = await pool.execute(query, values);
    return results;
};
const getProductById = async (id) => {
    const query = 'SELECT * FROM product_variants WHERE id = ?';
    const [rows] = await pool.execute(query, [id]);
    return rows[0];
};


const deleteVariant = async (id) => {
    const query = 'DELETE FROM product_variants WHERE id = ?';
    const [results] = await pool.execute(query, [id]);
    return results;
};

module.exports = {
    getProductById,
    getAll,
    createVariant,
    checkVariant,
    updateVariant,
    deleteVariant
};
