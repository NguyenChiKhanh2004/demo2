const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const AuthMid = require('../middlewares/middleware');


//Lấy tất cả user
// [GET] localhost:3000/user
router.get('/', AuthMid.authMiddleware , AuthMid.adminMiddleware ,userController.getAllUsers);

// [GET] localhost:3000/user
router.get('/:id',AuthMid.authMiddleware ,AuthMid.adminMiddleware ,userController.getUsersById);

// [POST] localhost:300/user
router.post('/',AuthMid.authMiddleware, AuthMid.adminMiddleware, userController.createUsers)

//[POST] localhost:3000/user/login
router.post('/login', userController.login)

// [PUT] localhost:3000/user/:id
router.put('/:id',AuthMid.authMiddleware,AuthMid.adminMiddleware, userController.updateUsers);

// Xóa user
// [DELETE] localhost:3000/user/:id
router.delete('/:id',AuthMid.authMiddleware,AuthMid.adminMiddleware, userController.deleteUsers);

module.exports = router;