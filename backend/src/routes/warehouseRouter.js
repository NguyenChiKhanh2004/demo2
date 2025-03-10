const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouseController');

// Lấy danh sách kho hàng
// [GET] localhost:3000/warehouse
router.get('/', warehouseController.getAllWarehouse);

// Thêm kho hàng mới
// [POST] localhost:3000/warehouse
router.post('/', warehouseController.createWarehouse);

// Cập nhật kho hàng
// [PUT] localhost:3000/warehouse/:id
router.put('/:id', warehouseController.updateWarehouse);

// Xóa kho hàng
// [DELETE] localhost:3000/warehouse/:id
router.delete('/:id', warehouseController.deleteWarehouse);

module.exports = router;
