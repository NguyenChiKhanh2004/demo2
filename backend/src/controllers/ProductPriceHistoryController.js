const ProductPriceHistory = require('../models/productPriceHistoryModel');

class ProductPriceHIstoryController {
    async getAllProductPriceHistory(req, res) {
        try {
                    const productPriceHistory = await ProductPriceHistory.getAll();
                    res.status(200).json(productPriceHistory);
                } catch (error) {
                    res.status(500).json({ message: error.message });
                }

    }
    async createProductPriceHistory(req, res) {
         const newProductPriceHistory = req.body;
                try {
                     const NewProductPriceHistory = await ProductPriceHistory.createProductPriceHistory(newProductPriceHistory);
                     res.status(200).json("NewProductPriceHistory created successfully");
         
                } catch (error) {
                     res.status(500).json({ message: error.message });
                }
       
    }

    async updateProductPriceHistory(req, res) {
            const { id } = req.params;
                    const updatedProductPriceHistory = req.body;
                    try {
                        await ProductPriceHistory.updateProductPriceHistory(id, updatedProductPriceHistory);
                        res.status(200).json({ message: "NewProductPriceHistory updated successfully" });
                    } catch (error) {
                        res.status(500).json({ message: error.message });
                    }
       
    }

    async deleteProductPriceHistory(req, res) {
        const { id } = req.params;
                try {
                    await ProductPriceHistory.deleteProductPriceHistory(id);
                    res.status(200).json({ message: "NewProductPriceHistory deleted successfully" });
                } catch (error) {
                    res.status(500).json({ message: error.message });
      
    }

    }
    async getProductPriceHistoryByProductId(req, res) {
        const { id } = req.params;
        try {
            const productPriceHistory = await ProductPriceHistory.getProductPriceHistoryByProductId(id);
            res.status(200).json(productPriceHistory);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }}
}
module.exports = new ProductPriceHIstoryController;