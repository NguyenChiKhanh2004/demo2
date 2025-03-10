const express = require('express');
const router = express.Router();
const DiscountsController = require('../controllers/discountsController');


//lay tat ca discounts
// [GET] localhost:3000/discounts
router.get('/', DiscountsController.getAllDiscounts);

// [POST] localhost:300/discounts
router.post('/', DiscountsController.createDiscounts)

// Cập nhật discounts
// [PUT] localhost:3000/discounts/:id
router.put('/:id', DiscountsController.updateDiscounts);

// Xóa discounts
// [DELETE] localhost:3000/discounts/:id
router.delete('/:id', DiscountsController.deleteDiscounts);

// Lấy ra discounts theo product_id
// [GET] localhost:3000/discounts/:id
router.get('/:id', DiscountsController.getDiscountsByProductId);

module.exports = router;