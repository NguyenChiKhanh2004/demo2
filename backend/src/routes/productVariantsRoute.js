// routes/ProductVariantRouter.js
const express = require('express');
const router = express.Router();
const productVariantController = require('../controllers/ProductVariantController');

// Lấy tất cả biến thể sản phẩm
// [GET] localhost:3000/productVariants
router.get('/', productVariantController.getAllVariants);

// Thêm mới biến thể sản phẩm
// [POST] localhost:3000/productVariants
router.post('/', productVariantController.createVariant);

// Cập nhật biến thể sản phẩm
// [PUT] localhost:3000/productVariants/:id
router.put('/:id', productVariantController.updateVariant);

// Xóa biến thể sản phẩm
// [DELETE] localhost:3000/productVariants/:id
router.delete('/:id', productVariantController.deleteVariant);

module.exports = router;
