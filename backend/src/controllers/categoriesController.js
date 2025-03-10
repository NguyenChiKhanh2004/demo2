const categories = require('../models/categoriesModel');
const pool = require('../utils/connectDB');

class CategoriesController {
    async getAllCategories(req, res) {
        try {
            const Categories = await categories.getAllCategories();
            res.status(200).json(Categories);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createCategories(req, res) {
        try {
            const newCategories = req.body;
            const Categories = await categories.createCategories(newCategories);
            res.status(200).json("Categories created successfully");
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }

    }

    // async login(req, res) {


    // }

    // Cập nhật user
    async updateCategories(req, res) {
        try {
            const { id } = req.params;
            console.log(id);
            const { name, description } = req.body;
            const [result] = await pool.execute("UPDATE categories SET name = ?, description = ? WHERE id = ?", [name, description, id]);
            if (result.affectedRows === 0) {
                return res.status(400).json({ message: "Categories not exits" });
            }
            res.json({ message: "Categories update successfull!" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Xóa user
    async deleteCategories(req, res) {
        try {
            const { id } = req.params;
            const [result] = await pool.execute("DELETE FROM categories WHERE id = ?", [id]);
            if (result.affectedRows === 0) {
                return res.status(400).json({ message: "Categories not exits" });
            }
            res.json({ message: "Categories delete successfull!" });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }


    }

    async getCategoriesById(req, res) {
            try {
                const { id } = req.params;
                const brand = await categories.getCategoriesById(id); // Đổi biến thành `brand` cho đúng số ít
        
                if (!brand) {
                    return res.status(404).json({ message: "Categories not found" });
                }
        
                res.status(200).json(brand);
            } catch (error) {
                res.status(500).json({ message: error.message }); // Bắt lỗi và trả về mã lỗi 500
            }
        }
}
module.exports = new CategoriesController();
