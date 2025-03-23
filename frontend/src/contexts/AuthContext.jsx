import { createContext, useContext, useState, useEffect } from "react";
import { getAccessToken, setAccessToken, removeAccessToken } from "../utils/authStorage";

const AuthContext = createContext();

const decodeJWT = (token) => {
  try {
    const payloadBase64 = token.split(".")[1];
    const payloadJson = atob(payloadBase64);
    return JSON.parse(payloadJson);
  } catch (error) {
    console.error("Lỗi giải mã JWT:", error);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      const decoded = decodeJWT(token);
      if (decoded) {
        setUser(decoded);
        setIsAuthenticated(true);
      } else {
        removeAccessToken();
        setUser(null);
        setIsAuthenticated(false);
      }
    }
  }, []);

  const login = (token) => {
    setAccessToken(token);
    const decoded = decodeJWT(token);
    if (decoded) {
      setUser(decoded);
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
