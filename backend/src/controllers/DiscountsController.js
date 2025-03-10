const Discounts = require('../models/discountsModel');
const bcrypt = require('bcrypt');

class DiscountsController {
    async getAllDiscounts(req, res) {
        try {
                    const discounts = await Discounts.getAll();
                    res.status(200).json(discounts);
                } catch (error) {
                    res.status(500).json({ message: error.message });
                }

    }
    async createDiscounts(req, res) {
         const NewDiscounts = req.body;
                try {
                     const newDiscounts = await Discounts.createDiscounts(NewDiscounts);
                     res.status(200).json("User created successfully");
         
                } catch (error) {
                     res.status(500).json({ message: error.message });
                }
        
       
    }

    async updateDiscounts(req, res) {
        const { id } = req.params;
                const updatedDiscounts = req.body;
                try {
                    await Discounts.updateDiscounts(id, updatedDiscounts);
                    res.status(200).json({ message: "User updated successfully" });
                } catch (error) {
                    res.status(500).json({ message: error.message });}
       
    }

    async deleteDiscounts(req, res) {
        const { id } = req.params;
                try {
                    await Discounts.deleteDiscounts(id);
                    res.status(200).json({ message: "User deleted successfully" });
                } catch (error) {
                    res.status(500).json({ message: error.message });}
      
    }
    async getDiscountsByProductId(req, res) {
        const { id } = req.params;
        try {
            const discounts = await Discounts.getDiscountsByProductId(id);
            res.status(200).json(discounts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }}


}
module.exports = new DiscountsController;