const express = require('express');
const router = express.Router();
//const userController = require('../controllers/UserController');
//const dienthoaiController = require('../controllers/dienthoaiController');
const categoriesController = require('../controllers/categoriesController');

//lấy tất cả danh sách dienthoai
//[GET] localhost:3000/dienthoai

router.get('/', categoriesController.getAllCategories);

router.post('/', categoriesController.createCategories);

//[POST] localhost:3000/dienthoai/login
// router.post('/login', dienthoaiController.login);

//[PUT]  localhost:3000/dienthoai/id dienthoai
router.put('/:id',categoriesController.updateCategories);


//[DELETE] localhost:3000/dienthoai/id dienthoai
router.delete('/:id', categoriesController.deleteCategories);

module.exports = router;