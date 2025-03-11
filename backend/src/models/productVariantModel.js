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
const getProductByColor = async (product_id, color_id) => {
    const query = `
        SELECT pv.id, pv.product_id, c.name AS color_name, r.size AS ram_size, ro.size AS rom_size, 
               pv.sku, pv.price, pv.stock_status, pv.image_url, pv.created_at, pv.updated_at
        FROM product_variants pv
        JOIN colors c ON pv.color_id = c.id
        JOIN rams r ON pv.ram_id = r.id
        JOIN roms ro ON pv.rom_id = ro.id
        WHERE pv.product_id = ? 
        AND pv.color_id = ?;
    `;

    const [results] = await pool.execute(query, [product_id, color_id]);
    return results;
};
const getProductByMemory = async (product_id, ram_id, rom_id) => {
    const query = `
            SELECT DISTINCT c.id AS color_id, c.name AS color_name
            FROM product_variants pv
            JOIN colors c ON pv.color_id = c.id
            WHERE pv.product_id = ?
            AND pv.ram_id = ?
            AND pv.rom_id = ?
            AND pv.stock_status = 'in_stock';
        `;

        const [results] = await pool.execute(query, [product_id, ram_id, rom_id]);
    return results;
}






    module.exports = {
        getProductById,
        getAll,
        createVariant,
        checkVariant,
        updateVariant,
        deleteVariant,
        getProductByColor,
        getProductByMemory
    };
