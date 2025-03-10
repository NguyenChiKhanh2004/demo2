// services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/product'; // Sử dụng http thay vì https (nếu API của bạn không hỗ trợ HTTPS)

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Trả về dữ liệu từ API
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Ném lỗi để component có thể xử lý
  }
};