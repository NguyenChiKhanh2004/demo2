const Product = require('../models/productModel');


class ProductController {
    async getAllProduct(req, res) {

        try {
            const Products = await Product.getAllProduct();
            res.status(200).json(Products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createProduct(req, res) {
        const newProduct = req.body;
        try {
            const product = await Product.createProduct(newProduct);
            res.status(201).json({ message: "Product created successfully", product });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getProductById(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.getProductById(id);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateProduct(req, res) {
        const { id } = req.params;
        const updatedProduct = req.body;
        try {
            await Product.updateProduct(id, updatedProduct);
            res.status(200).json({ message: "Product updated successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteProduct(req, res) {
        const { id } = req.params;
        try {
            await Product.deleteProduct(id);
            res.status(200).json({ message: "Product deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ProductController();