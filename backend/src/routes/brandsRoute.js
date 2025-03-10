const express = require('express');
const router = express.Router();
//const userController = require('../controllers/UserController');
const brandsController = require('../controllers/brandsController');

//lấy tất cả danh sách dienthoai
//[GET] localhost:3000/dienthoai

router.get('/', brandsController.getAllBrands);

router.post('/', brandsController.createBrands);

//[POST] localhost:3000/dienthoai/login
// router.post('/login', dienthoaiController.login);

//[PUT]  localhost:3000/dienthoai/id dienthoai
router.put('/:id',brandsController.updateBrands);


//[DELETE] localhost:3000/dienthoai/id dienthoai
router.delete('/:id', brandsController.deleteBrands);

module.exports = router;