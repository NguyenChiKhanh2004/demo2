const express = require('express');
const router = express.Router();
//const userController = require('../controllers/UserController');
const brandsController = require('../controllers/brandsController');

//lấy tất cả danh sách dienthoai
//[GET] localhost:3000/dienthoai

router.get('/', brandsController.getAllBrands);

router.post('/', brandsController.createBrands);

//lấy brand theo id
//[GET] localhost:3000/dienthoai/id
router.get('/:id', brandsController.getBrandsById);



//[PUT]  localhost:3000/dienthoai/id dienthoai
router.put('/:id',brandsController.updateBrands);


//[DELETE] localhost:3000/dienthoai/id dienthoai
router.delete('/:id', brandsController.deleteBrands);

module.exports = router;