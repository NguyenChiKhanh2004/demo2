const roms = require('../models/romsModel');
const bcrypt = require('bcrypt');
const pool = require('../utils/connectDB');

class RomsController {
    async getAllRoms(req, res) {
         try{
            const Roms = await roms.getAllRoms();
            res.status(200).json(Roms);
         } catch (error) {
            res.status(500).json({ message: error.message });
         }
        }

    async createRoms(req, res) {
        try{
            const newRoms = req.body;
            const Roms = await roms.createRoms(newRoms);
            res.status(200).json("Roms created successfully");
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // async login(req, res) {
       
        
    // }
    
    // Cập nhật user
    async updateRoms(req, res){
       try{
        const { id } = req.params;
        console.log(id);
        const { size } = req.body;
        const [result] = await pool.execute("UPDATE roms SET SIZE = ? WHERE id = ?", [size, id]);
        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "Roms not exits" });
        }
        res.json({ message: "Roms update successfull!" });
       } catch (error) {
        res.status(500).json({ message: error.message });
       }
    }

     // Xóa user
    async deleteRoms(req, res){
      try{
        const { id } = req.params;
        const [result] = await pool.execute("DELETE FROM roms WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "Roms not exits" });
        }
        res.json({ message: "Roms delete successfull!" });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } 
    
}

module.exports = new RomsController();
