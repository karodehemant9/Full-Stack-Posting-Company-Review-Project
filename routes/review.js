const express = require('express');
const reviewController = require('../controllers/review');
const router = express.Router();


router.post('/add-review', reviewController.addReview);

router.get('/get-reviews/:companyName', reviewController.getReviews);

module.exports = router;
