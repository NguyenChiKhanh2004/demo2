import api from "./services";

export const login = async (phone, password) => {
    try {
      const response = await api.post("/user/login", { phone, password });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Đăng nhập thất bại");
      }
    }
  };

export const getProfile = async (token) => {
  const response = await api.get("/user/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default {
  login,
  getProfile,
};
