const Reviews = require('../models/reviewsModel');
const bcrypt = require('bcrypt');

class ReviewsController {
    async getAllReviews(req, res) {
        try {
                    const reviews = await Reviews.getAll();
                    res.status(200).json(reviews);
                } catch (error) {
                    res.status(500).json({ message: error.message });
                }

    }
    async createReviews(req, res) {
       const NewReviews = req.body;
               try {
                   const newReviews = await Reviews.createReviews(NewReviews);
                   res.status(200).json("User created successfully");
       
               } catch (error) {
                   res.status(500).json({ message: error.message });
               }
    }

    async updateReviews(req, res) {
         const { id } = req.params;
                const updatedReviews = req.body;
                try {
                     await Reviews.updateReviews(id, updatedReviews);
                     res.status(200).json({ message: "User updated successfully" });
                } catch (error) {
                     res.status(500).json({ message: error.message });
                }
       
    }

    async deleteReviews(req, res) {
        const { id } = req.params;
                try {
                    await Reviews.deleteReviews(id);
                    res.status(200).json({ message: "User deleted successfully" });
                } catch (error) {
                    res.status(500).json({ message: error.message });
      
    }
}
async getReviewsByProductId(req, res) {
    const { id } = req.params;
    try {
        const reviews = await Reviews.getReviewsByProductId(id);
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }}

}
module.exports = new ReviewsController;