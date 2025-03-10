const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');


//lay tat ca user
// [GET] localhost:3000/user
router.get('/', userController.getAllUsers);

// [POST] localhost:300/user
router.post('/', userController.createUsers)

//[POST] localhost:3000/user/login
router.post('/login', userController.login)

// Cập nhật user
// [PUT] localhost:3000/user/:id
router.put('/:id', userController.updateUsers);

// Xóa user
// [DELETE] localhost:3000/user/:id
router.delete('/:id', userController.deleteUsers);

module.exports = router;