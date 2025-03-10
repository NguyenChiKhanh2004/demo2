const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');


//lay tat ca product
// [GET] localhost:3000/product
router.get('/', productController.getAllProduct);

// Lấy chi tiết sản phẩm theo ID
// [GET] localhost:3000/products/:id
router.get('/:id', productController.getProductById);

// Lấy sản phẩm theo hãng sản xuất
// [GET] localhost:3000/products/brand
router.post('/brand', productController.getProductsByBrand);

// Thêm sản phẩm mới
// [POST] localhost:3000/products
router.post('/', productController.createProduct);

// Cập nhật sản phẩm
// [PUT] localhost:3000/products/:id
router.put('/:id', productController.updateProduct);

// Xóa sản phẩm
// [DELETE] localhost:3000/products/:id
router.delete('/:id', productController.deleteProduct);



module.exports = router;