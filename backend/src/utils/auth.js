const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const genrateAccessToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
}

const verifyAccessToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
}

module.exports = {
    genrateAccessToken,
    verifyAccessToken
};