
const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Thị trường bất động sản Việt Nam 2024: Xu hướng và dự báo",
      excerpt: "Thị trường bất động sản Việt Nam đang có những chuyển biến tích cực với nhiều dự án mới được triển khai...",
      date: "2024-07-04",
      category: "Thị trường",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
      readTime: "5 phút đọc"
    },
    {
      id: 2,
      title: "Hướng dẫn đầu tư bất động sản cho người mới bắt đầu",
      excerpt: "Những kiến thức cơ bản về đầu tư bất động sản mà người mới bắt đầu cần biết để đạt được lợi nhuận tốt...",
      date: "2024-07-02",
      category: "Hướng dẫn",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      readTime: "8 phút đọc"
    },
    {
      id: 3,
      title: "Top 10 khu vực có tiềm năng phát triển cao tại TP.HCM",
      excerpt: "Khám phá những khu vực đang được đầu tư mạnh mẽ và có tiềm năng tăng giá trong tương lai gần...",
      date: "2024-06-30",
      category: "Phân tích",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
      readTime: "6 phút đọc"
    },
    {
      id: 4,
      title: "Quy định pháp lý mới về giao dịch bất động sản",
      excerpt: "Cập nhật những thay đổi mới nhất trong quy định pháp lý ảnh hưởng đến việc mua bán bất động sản...",
      date: "2024-06-28",
      category: "Pháp lý",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
      readTime: "4 phút đọc"
    },
    {
      id: 5,
      title: "Xu hướng thiết kế nội thất hiện đại 2024",
      excerpt: "Những xu hướng thiết kế nội thất đang được ưa chuộng và cách áp dụng vào không gian sống...",
      date: "2024-06-25",
      category: "Thiết kế",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
      readTime: "7 phút đọc"
    },
    {
      id: 6,
      title: "Cách đánh giá giá trị thực của một bất động sản",
      excerpt: "Hướng dẫn chi tiết cách định giá bất động sản dựa trên các yếu tố thị trường và vị trí...",
      date: "2024-06-22",
      category: "Định giá",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      readTime: "9 phút đọc"
    }
  ];

  const categories = ["Tất cả", "Thị trường", "Hướng dẫn", "Phân tích", "Pháp lý", "Thiết kế", "Định giá"];

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tin tức <span className="text-blue-600">Bất động sản</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cập nhật những thông tin mới nhất về thị trường bất động sản, 
            xu hướng đầu tư và kiến thức hữu ích
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {newsArticles[0].category}
                </span>
                <span>{newsArticles[0].date}</span>
                <span>{newsArticles[0].readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {newsArticles[0].title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {newsArticles[0].excerpt}
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Đọc tiếp →
              </button>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.slice(1).map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Đọc thêm →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Đăng ký nhận tin tức mới nhất
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Nhận thông tin cập nhật hàng tuần về thị trường bất động sản, 
            xu hướng đầu tư và các cơ hội tốt nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
