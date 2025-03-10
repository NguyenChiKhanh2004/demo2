import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import DashboardLayout from "../layouts/DashboardLayout";
import Users from "../pages/Users";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import Login from "../layouts/LoginLayout";
import Admin from "../layouts/Admin";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/admin" element={<Admin/>} />
      

      {/* Nested Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Route không tìm thấy */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
