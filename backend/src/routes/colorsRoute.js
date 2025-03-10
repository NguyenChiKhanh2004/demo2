const express = require('express');
const router = express.Router();
//const userController = require('../controllers/UserController');
//const brandsController = require('../controllers/brandsController');
const colorsController = require('../controllers/colorsController');

//lấy tất cả danh sách dienthoai
//[GET] localhost:3000/dienthoai

router.get('/', colorsController.getAllColors);

router.post('/', colorsController.createColors);

//[POST] localhost:3000/dienthoai/login
// router.post('/login', dienthoaiController.login);

//[PUT]  localhost:3000/dienthoai/id dienthoai
router.put('/:id',colorsController.updateColors);


//[DELETE] localhost:3000/dienthoai/id dienthoai
router.delete('/:id', colorsController.deleteColors);

module.exports = router;