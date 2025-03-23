// src/layouts/ClientLayout.jsx
import Navbar from "../components/Header";
import Footer from "../pages/Footer";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default ClientLayout;
