const User = require('../models/userModel');
const bcrypt = require('bcrypt');

class UserController {
    async getAllUsers(req, res) {
        try {
            const Users = await User.getAll();
            res.status(200).json(Users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async createUsers(req, res) {
        try{
            const newUsers = req.body;
            console.log(newUsers);
            const Users = await User.createUser(newUsers);
            res.status(200).json("Users created successfully");
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }

    }
    async login(req, res) {
        const { username, password } = req.body;
        try {
            const user = await User.checkuser(username);
            if (user.length === 0) {
                return res.status(400).json({ message: "Username không tồn tại" });
            }
    
            const checkpass = await bcrypt.compare(password, user[0].password);
            if (!checkpass) {
                return res.status(400).json({ message: "Sai mật khẩu" });
            }
    
            // Trả về role
            res.status(200).json({ 
                message: "Đăng nhập thành công", 
                role: user[0].role 
            });
    
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    

    async updateUsers(req, res) {
        try {
            const { id } = req.params;
            console.log(id);
            const { username, email, password, phone, role, status, full_name } = req.body;
    
            // Kiểm tra nếu có mật khẩu mới, thì hash lại mật khẩu
            let updatedPassword = password;
            if (password) {
                updatedPassword = await bcrypt.hash(password, 10);  // Hash mật khẩu nếu có
            }
    
            // Cập nhật câu lệnh SQL với các giá trị đã được xử lý
            const [result] = await pool.execute("UPDATE users SET username = ?, email = ?, password = ?, phone = ?, full_name = ?, role = ?, status = ? WHERE id = ?", 
                [username, email, updatedPassword, phone, full_name, role, status, id]);
    
            // Kiểm tra xem có bản ghi nào bị ảnh hưởng không
            if (result.affectedRows === 0) {
                return res.status(400).json({ message: "User does not exist" });
            }
    
            res.json({ message: "User updated successfully!" });
        } catch (error) {
            // Xử lý lỗi
            res.status(500).json({ message: error.message });
        }
    }

    // Xóa user
    async deleteUsers(req, res){
        try {
            const { id } = req.params;
            console.log(id);
            const [result] = await pool.execute("DELETE FROM users WHERE id = ?",[id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Users not exits" });
        }
        res.json({ message: "Users delete successfull!" });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }


}
module.exports = new UserController;