const pool = require('../utils/connectDB');


const getAllProduct = async () => {
    const query = 'SELECT id, name, price, image_url FROM products';
    const [rows, fields] = await pool.execute(query);
    return rows;
}
const createProduct = async (newProduct) => {
    const { name, slug, description, price, category_id, brand_id, image_url, status } = newProduct;
    const query = `
        INSERT INTO products (name, slug, description, price, category_id, brand_id, image_url, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await pool.execute(query, [name, slug, description, price, category_id, brand_id, image_url, status]);
    return result;
};

const getProductById = async (id) => {
    const query = 'SELECT * FROM products WHERE id = ?';
    const [rows] = await pool.execute(query, [id]);
    return rows[0];
};

const updateProduct = async (id, updatedProduct) => {
    const { name, slug, description, price, category_id, brand_id, image_url, status } = updatedProduct;
    const query = `
        UPDATE products SET name = ?, slug = ?, description = ?, price = ?, category_id = ?, brand_id = ?, image_url = ?, status = ?
        WHERE id = ?
    `;
    const [result] = await pool.execute(query, [name, slug, description, price, category_id, brand_id, image_url, status, id]);
    return result;
};

const deleteProduct = async (id) => {
    const query = 'DELETE FROM products WHERE id = ?';
    const [result] = await pool.execute(query, [id]);
    return result;
};

module.exports = {
    getAllProduct,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
};
