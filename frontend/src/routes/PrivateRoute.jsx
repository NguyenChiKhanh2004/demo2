import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import ModalNotification from "../components/NotificationComponent";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  const [showModal, setShowModal] = useState(!isAuthenticated);

  return (
    <>
      {/* Nếu chưa đăng nhập, hiển thị modal */}
      {!isAuthenticated && showModal && (
        <ModalNotification isOpen={showModal} onClose={() => setShowModal(false)} />
      )}

      {/* Nếu đã đăng nhập, cho phép truy cập nội dung */}
      {isAuthenticated && <Outlet />}
    </>
  );
};

export default PrivateRoute;
