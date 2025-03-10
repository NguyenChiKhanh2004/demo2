const express = require('express');
const router = express.Router();
const productSpecsController = require('../controllers/ProductSpecsController');


//lay tat ca productSpecs
// [GET] localhost:3000/productSpecs
router.get('/', productSpecsController.getAllSpecs);

// [GET] localhost:3000/productSpecs/:id
router.get('/:id', productSpecsController.getSpecsByID);

// [POST] localhost:300/productSpecs
router.post('/', productSpecsController.createSpecs);

// Cập nhật user
// [PUT] localhost:3000/productSpecs/:id
router.put('/:id', productSpecsController.updateSpecs);

// Xóa user
// [DELETE] localhost:3000/productSpecs/:id
router.delete('/:id', productSpecsController.deleteSpecs);

module.exports = router;