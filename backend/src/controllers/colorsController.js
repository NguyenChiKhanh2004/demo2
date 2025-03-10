const colors = require('../models/colorsModel');
const bcrypt = require('bcrypt');
const pool = require('../utils/connectDB');

class ColorsController {
    async getAllColors(req, res) {
          try {
                    const Colors = await colors.getAllColors();
                    res.status(200).json(Colors);
                }
            catch (error) {
                    res.status(500).json({ message: error.message });
          }
        }

    async createColors(req, res) {
        try{
            const newColors = req.body;
            const Colors = await colors.createColors(newColors);
            res.status(200).json("Colors created successfully");
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // async login(req, res) {
       
        
    // }
    
    // Cập nhật user
    async updateColors(req, res){
        try{
            const { id } = req.params;
            console.log(id);
            const { name } = req.body;
            const [result] = await pool.execute("UPDATE colors SET name = ? WHERE id = ?", [name, id]);
        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "Colors not exits" });
        }
        res.json({ message: "Colors update successfull!" });
        } catch (error) {
            res.status(500).json({ message: error.message });
    }
    }

     // Xóa user
    async deleteColors(req, res){
      try {
        const { id } = req.params;
        const [result] = await pool.execute("DELETE FROM colors WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "Colors not exits" });
        }
        res.json({ message: "Colors delete successfull!" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } 
    
}

module.exports = new ColorsController();
