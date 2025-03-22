const auth = require('../utils/auth');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    console.log(token);
    if (!token) {
        return res.status(401).json({ message: "Token không tồn tại" });
    }
    const user = auth.verifyAccessToken(token);
    if (!user) {
        return res.status(403).json({ message: "Token không hợp lệ" });
    }
    req.user = user;
    next();
}


const adminMiddleware = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ message: "Bạn không có quyền truy cập" });
    }
    next();
};

const customerMiddleware = (req, res, next) => {
    if (!req.user || req.user.role !== 'customer') {
        return res.status(403).json({ message: "Bạn không có quyền truy cập" });
    }
    next();
};

module.exports = {
    authMiddleware,
    adminMiddleware,
    customerMiddleware
};

