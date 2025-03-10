const pool = require('../utils/connectDB');

// Lấy tất cả kho hàng
const getAll = async () => {
    const query = 'SELECT * FROM warehouse_stock';
    const [rows] = await pool.execute(query);
    return rows;
};

// Thêm kho hàng mới
const createWarehouse = async (newWarehouse) => {
    const { variant_id, warehouse_name, stock } = newWarehouse;
    const query = 'INSERT INTO warehouse_stock (variant_id, warehouse_name, stock) VALUES (?, ?, ?)';
    const [results] = await pool.execute(query, [variant_id, warehouse_name, stock]);
    return results;
};

// Kiểm tra kho hàng có tồn tại không
const checkWarehouse = async (variant_id, warehouse_name) => {
    const query = 'SELECT * FROM warehouse_stock WHERE variant_id = ? AND warehouse_name = ?';
    const [rows] = await pool.execute(query, [variant_id, warehouse_name]);
    return rows;
};

// Cập nhật kho hàng
const updateWarehouse = async (id, updatedWarehouse) => {
    const { warehouse_name, stock } = updatedWarehouse;
    const query = 'UPDATE warehouse_stock SET warehouse_name = ?, stock = ? WHERE id = ?';
    const [results] = await pool.execute(query, [warehouse_name, stock, id]);
    return results;
};

// Xóa kho hàng
const deleteWarehouse = async (id) => {
    const query = 'DELETE FROM warehouse_stock WHERE id = ?';
    const [results] = await pool.execute(query, [id]);
    return results;
};

const getWarehouseById = async (id) => {
    const query = 'SELECT * FROM warehouse_stock WHERE id = ?';
    const [rows] = await pool.execute(query, [id]);
    return rows[0];
};


module.exports = {
    getWarehouseById,
    getAll,
    createWarehouse,
    checkWarehouse,
    updateWarehouse,
    deleteWarehouse
};
