const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const pool = require('../utils/connectDB');
const auth = require('../utils/auth');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await User.getAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async login(req, res) {
        const { phone, password } = req.body;
        try {
            const user = await User.checkuser(phone);
            if (user.length === 0) {
                return res.status(400).json({ message: "Username không tồn tại" });
            }
            const checkpass = await bcrypt.compare(password, user[0].password);
            if (!checkpass) {
                return res.status(400).json({ message: "Sai mật khẩu" });
            }
            const currrentUser = {
                phone: user[0].phone,
                email: user[0].email,
                role: user[0].role
            };
            const accessToken = auth.genrateAccessToken(currrentUser);
            res.status(200).json({ accessToken });
    
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async createUsers(req, res) {
        try{
            const newUsers = req.body;
            console.log(newUsers);
            const Users = await User.createUsers(newUsers);
            res.status(200).json("Users created successfully");
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }

    }
    async updateUsers(req, res) {
        try {
            const { id } = req.params;
            const updatedUser = req.body;
            const result = await User.updateUsers(id, updatedUser);
            if (result.affectedRows === 0) {
                return res.status(400).json({ message: "User does not exist" });
            }
            res.json({ message: "User updated successfully!" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async deleteUsers(req, res) {
        try {
            const { id } = req.params;
            console.log(id);
            const result = await User.deleteUsers(id);
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Users not exists" });
            }
            res.json({ message: "Users deleted successfully!" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUsersById (req, res) {
        try {
            const { id } = req.params;
            const user = await User.getUsersById(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}
module.exports = new UserController;