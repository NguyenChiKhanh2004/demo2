// controllers/ProductVariantController.js
const ProductVariant = require('../models/productVariantModel');

class ProductVariantController {
    async getAllVariants(req, res) {
        try {
            const variants = await ProductVariant.getAll();
            res.status(200).json(variants);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createVariant(req, res) {
        const newVariant = req.body;
        try {
            // Kiểm tra xem biến thể đã tồn tại chưa
            const existingVariant = await ProductVariant.checkVariant(
                newVariant.product_id,
                newVariant.color_id,
                newVariant.ram_id,
                newVariant.rom_id
            );
            if (existingVariant.length > 0) {
                return res.status(400).json({ message: "Biến thể sản phẩm đã tồn tại!" });
            }

            await ProductVariant.createVariant(newVariant);
            res.status(201).json({ message: "Biến thể sản phẩm đã được tạo thành công" });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateVariant(req, res) {
        const { id } = req.params;
        const updatedVariant = req.body;
        try {
            await ProductVariant.updateVariant(id, updatedVariant);
            res.status(200).json({ message: "Cập nhật biến thể sản phẩm thành công" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async getVariantById(req, res) {
        const { id } = req.params;
        try {
            const product = await ProductVariant.getProductById(id);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }


    async deleteVariant(req, res) {
        const { id } = req.params;
        try {
            await ProductVariant.deleteVariant(id);
            res.status(200).json({ message: "Xóa biến thể sản phẩm thành công" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }


    async getVariantByColor(req, res) {
        try {
            const { product_id, color_id } = req.body; // Lấy brand từ body JSON
            if (!product_id || !color_id) {
                return res.status(400).json({ message: "Vui lòng cung cấp product_id và color_id." });
            }
            const products = await ProductVariant.getProductByColor(product_id, color_id);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async getVariantBymemory(req, res) {
        try {
            const { product_id, ram_id, rom_id } = req.body;
            if (!product_id || !ram_id || !rom_id) {
                return res.status(400).json({ message: "Vui lòng cung cấp product_id, ram_id và rom_id." });
            }
            const products = await ProductVariant.getProductByMemory(product_id, ram_id, rom_id);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }


}

module.exports = new ProductVariantController();
