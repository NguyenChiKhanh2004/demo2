import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">📊 Dashboard</h1>
      <nav className="flex space-x-4 justify-center mt-4">
        <Link to="users" className="text-blue-500">👥 Users</Link>
        <Link to="settings" className="text-blue-500">⚙️ Settings</Link>
      </nav>
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
