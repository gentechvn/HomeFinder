
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">HF</span>
              </div>
              <span className="font-bold text-xl">HomeFinder</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Website bất động sản hàng đầu Việt Nam, kết nối người mua và người bán
              với hàng nghìn bất động sản chất lượng.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex">
                <span className="w-6">📍</span>
                <span>DaNang, VietNam</span>
              </p>
              <p className="flex">
                <span className="w-6">📞</span>
                <span>Hotline: (+84) 911 091 506</span>
              </p>
              <p className="flex">
                <span className="w-6">✉️</span>
                <span>Email: ngkhacthinh29@gmail.com</span>
              </p>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/properties" className="hover:text-blue-400 transition-colors">Bất động sản</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">Giới thiệu</Link></li>
              <li><Link to="/news" className="hover:text-blue-400 transition-colors">Tin tức</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Danh mục</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/properties?type=apartment" className="hover:text-blue-400 transition-colors">Căn hộ</Link></li>
              <li><Link to="/properties?type=house" className="hover:text-blue-400 transition-colors">Nhà phố</Link></li>
              <li><Link to="/properties?type=land" className="hover:text-blue-400 transition-colors">Đất nền</Link></li>
              <li><Link to="/properties?type=commercial" className="hover:text-blue-400 transition-colors">Thương mại</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; GenTech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
