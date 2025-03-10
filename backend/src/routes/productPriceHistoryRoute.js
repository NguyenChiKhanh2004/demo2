const express = require('express');
const router = express.Router();
const ProductPriceHistoryController = require('../controllers/productPriceHistoryController');


//lay tat ca productPriceHistory
// [GET] localhost:3000/productPriceHistory
router.get('/', ProductPriceHistoryController.getAllProductPriceHistory);

// [POST] localhost:300/productPriceHistory
router.post('/', ProductPriceHistoryController.createProductPriceHistory)

// Cập nhật productPriceHistory
// [PUT] localhost:3000/productPriceHistory/:id
router.put('/:id', ProductPriceHistoryController.updateProductPriceHistory);

// Xóa productPriceHistory
// [DELETE] localhost:3000/productPriceHistory/:id
router.delete('/:id', ProductPriceHistoryController.deleteProductPriceHistory);

// Lấy ra productPriceHistory theo product_id
// [GET] localhost:3000/productPriceHistory/:id
router.get('/:id', ProductPriceHistoryController.getProductPriceHistoryByProductId);

module.exports = router;