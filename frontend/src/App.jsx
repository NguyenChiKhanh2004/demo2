import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientRoutes from "./routes/clientRoutes";
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import AdminRoutes from "./routes/adminRoutes";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<ClientLayout />}>
          <Route path="/*" element={<ClientRoutes />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
