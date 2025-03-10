const express = require('express');
const router = express.Router();
//const userController = require('../controllers/UserController');
//const brandsController = require('../controllers/brandsController');
//const colorsController = require('../controllers/colorsController');
const ramsController = require('../controllers/ramsController');

//lấy tất cả danh sách dienthoai
//[GET] localhost:3000/dienthoai

router.get('/', ramsController.getAllRams);

router.post('/', ramsController.createRams);

//[POST] localhost:3000/dienthoai/login
// router.post('/login', dienthoaiController.login);

//[PUT]  localhost:3000/dienthoai/id dienthoai
router.put('/:id',ramsController.updateRams);


//[DELETE] localhost:3000/dienthoai/id dienthoai
router.delete('/:id', ramsController.deleteRams);

module.exports = router;