import { Routes, Route } from "react-router-dom";
import Admin from "../layouts/Admin";

export default function AdminRoutes() {
  return (
    <Routes>
        <Route path="" element={<Admin/>} />
    </Routes>
  );
}
