const express = require('express');
const router = express.Router();
const ReviewsController = require('../controllers/ReviewsController');


// [GET] localhost:3000/reviews
router.get('/', ReviewsController.getAllReviews);

// [POST] localhost:300/reviews
router.post('/', ReviewsController.createReviews)

// Cập nhật user
// [PUT] localhost:3000/reviews/:id
router.put('/:id', ReviewsController.updateReviews);

// Xóa user
// [DELETE] localhost:3000/reviews/:id
router.delete('/:id', ReviewsController.deleteReviews);

// Lấy ra user theo user_id
// [GET] localhost:3000/reviews/:id
router.get('/:id', ReviewsController.getReviewsByProductId);

module.exports = router;