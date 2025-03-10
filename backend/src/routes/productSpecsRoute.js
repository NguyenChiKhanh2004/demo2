const express = require('express');
const router = express.Router();
const productSpecsController = require('../controllers/ProductSpecsController');


//lay tat ca productSpecs
// [GET] localhost:3000/product
router.get('/', productSpecsController.getAllSpecs);

// [POST] localhost:300/product
router.post('/', productSpecsController.createSpecs);

// Cập nhật user
// [PUT] localhost:3000/product/:id
router.put('/:id', productSpecsController.updateSpecs);

// Xóa user
// [DELETE] localhost:3000/product/:id
router.delete('/:id', productSpecsController.deleteSpecs);

module.exports = router;