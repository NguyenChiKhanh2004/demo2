import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          📱 PhoneStore
        </Link>

        {/* Thanh tìm kiếm */}
        <div className="flex-1 mx-4">
          <input 
            type="text" 
            placeholder="Tìm kiếm điện thoại..." 
            className="w-full p-2 rounded text-black"
          />
        </div>

        {/* Liên kết điều hướng */}
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:underline">Trang chủ</Link></li>
            <li><Link to="/products" className="hover:underline">Sản phẩm</Link></li>
            <li><Link to="/about" className="hover:underline">Giới thiệu</Link></li>
            <li><Link to="/dashboard" className="hover:underline">Liên hệ</Link></li>
          </ul>
        </nav>

        {/* Giỏ hàng & Đăng nhập */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-2">3</span>
          </Link>
          <Link to="/login">
            <FaUser size={24} />
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
