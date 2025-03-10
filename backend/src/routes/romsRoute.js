const express = require('express');
const router = express.Router();
//const userController = require('../controllers/UserController');
//const brandsController = require('../controllers/brandsController');
//const colorsController = require('../controllers/colorsController');
//const ramsController = require('../controllers/ramsController');
const romsController = require('../controllers/romsController');

//lấy tất cả danh sách dienthoai
//[GET] localhost:3000/dienthoai

router.get('/', romsController.getAllRoms);

router.post('/', romsController.createRoms);

//[POST] localhost:3000/dienthoai/login
// router.post('/login', dienthoaiController.login);

//[PUT]  localhost:3000/dienthoai/id dienthoai
router.put('/:id',romsController.updateRoms);


//[DELETE] localhost:3000/dienthoai/id dienthoai
router.delete('/:id', romsController.deleteRoms);

module.exports = router;