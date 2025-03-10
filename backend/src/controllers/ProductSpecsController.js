// controllers/ProductSpecsController.js
const ProductSpecs = require('../models/ProductSpecsModel');

class ProductSpecsController {
    async getAllSpecs(req, res) {
        try {
            const specs = await ProductSpecs.getAll();
            res.status(200).json(specs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async createSpecs(req, res) {
        const newSpecs = req.body;
        try {
            const specs = await ProductSpecs.createSpecs(newSpecs);
            res.status(200).json({ message: "Product specs created successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async updateSpecs(req, res) {
        const { id } = req.params;
        const updatedSpecs = req.body;
        try {
            await ProductSpecs.updateSpecs(id, updatedSpecs);
            res.status(200).json({ message: "Product specs updated successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async deleteSpecs(req, res) {
        const { id } = req.params;
        try {
            await ProductSpecs.deleteSpecs(id);
            res.status(200).json({ message: "Product specs deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ProductSpecsController();
