
const About = () => {
  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Giới thiệu về <span className="text-blue-600">HomeFinder</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nền tảng bất động sản hàng đầu Việt Nam, kết nối người mua và người bán 
            với hàng nghìn bất động sản chất lượng trên toàn quốc.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-blue-600 text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sứ mệnh</h2>
            <p className="text-gray-600 leading-relaxed">
              Tạo ra một nền tảng minh bạch, đáng tin cậy và dễ sử dụng để kết nối 
              người mua và người bán bất động sản. Chúng tôi cam kết mang đến trải nghiệm 
              tốt nhất cho khách hàng trong việc tìm kiếm và giao dịch bất động sản.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="text-blue-600 text-4xl mb-4">🔮</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tầm nhìn</h2>
            <p className="text-gray-600 leading-relaxed">
              Trở thành nền tảng bất động sản số 1 Việt Nam, được tin tưởng bởi hàng triệu 
              người dùng. Chúng tôi hướng tới việc số hóa hoàn toàn quy trình giao dịch 
              bất động sản, làm cho việc mua bán trở nên đơn giản và thuận tiện hơn.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Giá trị cốt lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tin cậy</h3>
              <p className="text-gray-600">
                Tất cả thông tin được xác thực kỹ lưỡng, đảm bảo độ chính xác và minh bạch
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Nhanh chóng</h3>
              <p className="text-gray-600">
                Hỗ trợ khách hàng 24/7 với thời gian phản hồi nhanh nhất
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Đổi mới</h3>
              <p className="text-gray-600">
                Ứng dụng công nghệ hiện đại để mang lại trải nghiệm tối ưu
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Con số ấn tượng</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">Bất động sản</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-200">Khách hàng</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">63</div>
              <div className="text-blue-200">Tỉnh thành</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-200">Hài lòng</div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Đội ngũ phát triển</h2>
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">NT</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nguyễn Khắc Thịnh</h3>
            <p className="text-blue-600 mb-4">Founder & Developer</p>
            <p className="text-gray-600 text-sm">
              Với niềm đam mê công nghệ và bất động sản, tôi đã tạo ra HomeFinder 
              để giúp mọi người dễ dàng tìm kiếm ngôi nhà mơ ước của mình.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
