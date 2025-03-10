const rams = require('../models/ramsModel');
const bcrypt = require('bcrypt');
const pool = require('../utils/connectDB');

class RamsController {
    async getAllRams(req, res) {
         try{
            const Rams = await rams.getAllRams();
            res.status(200).json(Rams);
         } catch (error) {
            res.status(500).json({ message: error.message });
         }
        }

    async createRams(req, res) {
        try{
            const newRams = req.body;
            const Rams = await rams.createRams(newRams);
            res.status(200).json("Rams created successfully");
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // async login(req, res) {
       
        
    // }
    
    // Cập nhật user
    async updateRams(req, res){
       try{
        const { id } = req.params;
        console.log(id);
        const { size } = req.body;
        const [result] = await pool.execute("UPDATE rams SET SIZE = ? WHERE id = ?", [size, id]);
        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "Rams not exits" });
        }
        res.json({ message: "Rams update successfull!" });
       } catch (error) {
        res.status(500).json({ message: error.message });
       }
    }

     // Xóa user
    async deleteRams(req, res){
      try{
        const { id } = req.params;
        const [result] = await pool.execute("DELETE FROM rams WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "Rams not exits" });
        }
        res.json({ message: "Rams delete successfull!" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } 
    
}

module.exports = new RamsController();
