import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";
import Login from "../pages/LoginPage";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Settings from "../pages/Settings";
import DashboardLayout from "../layouts/DashboardLayout";

export default function ClientRoutes() {
  return (
      <Routes>

        <Route path="" element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
  );
}
