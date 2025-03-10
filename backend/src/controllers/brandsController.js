const brands = require('../models/brandsModel');
const bcrypt = require('bcrypt');
const pool = require('../utils/connectDB');

class BrandsController {
    async getAllBrands(req, res) {
          try {
                    const Brands = await brands.getAllBrands();
                    res.status(200).json(Brands);
                }
            catch (error) {
                    res.status(500).json({ message: error.message });
                }
        }

    async createBrands(req, res) {
        const newBrands = req.body;
        try {
            const Brands = await brands.createBrands(newBrands);
            res.status(200).json("Brands created successfully");
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
        
    }

    // async login(req, res) {
       
        
    // }
    
    // Cập nhật user
    async updateBrands(req, res){
        try {
            const { id } = req.params;
            console.log(id);
            const { name } = req.body;
            const [result] = await pool.execute("UPDATE brands SET name = ? WHERE id = ?", [name,id]);
        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "Brands not exits" });
        }
        res.json({ message: "Brands update successfull!" });
        
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

     // Xóa user
    async deleteBrands(req, res){
       try {
        const { id } = req.params;
        const [result] = await pool.execute("DELETE FROM brands WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "Brands not exits" });
        }
        res.json({ message: "Brands delete successfull!" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
    async getBrandsById(req, res) {
        try {
            const { id } = req.params;
            const brand = await brands.getBrandsById(id); // Đổi biến thành `brand` cho đúng số ít
    
            if (!brand) {
                return res.status(404).json({ message: "Brand not found" });
            }
    
            res.status(200).json(brand);
        } catch (error) {
            res.status(500).json({ message: error.message }); // Bắt lỗi và trả về mã lỗi 500
        }
    }
    
        
    
}

module.exports = new BrandsController();
