import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Header";
import AppRoutes from "./routes/routes";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
