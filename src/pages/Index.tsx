import HeroSection from '@/components/HeroSection';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { featuredProperties } from '@/data/properties';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState, useMemo } from 'react';

const Index = () => {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    priceRange: ''
  });

  // Hàm lọc featuredProperties theo filters
  const filteredProperties = useMemo(() => {
    return featuredProperties.filter((property) => {
      if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
      if (filters.type && property.type !== filters.type) {
        return false;
      }
      if (filters.priceRange) {
        const price = property.price;
        if (filters.priceRange === 'under-1b' && price >= 1_000_000_000) return false;
        if (filters.priceRange === '1b-3b' && (price < 1_000_000_000 || price > 3_000_000_000)) return false;
        if (filters.priceRange === '3b-5b' && (price < 3_000_000_000 || price > 5_000_000_000)) return false;
        if (filters.priceRange === 'above-5b' && price <= 5_000_000_000) return false;
      }
      return true;
    });
  }, [filters]);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onSearch = {setFilters} />

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Bất Động Sản <span className="text-blue-600">Nổi Bật</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Khám phá những bất động sản được lựa chọn kỹ lưỡng với vị trí đẹp và giá cả hợp lý
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
              <Link to="/properties">
                Xem tất cả bất động sản
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Tại Sao Chọn <span className="text-blue-600">HomeFinder?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Với hơn 10 năm kinh nghiệm trong lĩnh vực bất động sản, chúng tôi cam kết 
                mang đến dịch vụ tốt nhất cho khách hàng.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Pháp lý minh bạch</h3>
                    <p className="text-gray-600">Tất cả bất động sản đều được kiểm tra pháp lý kỹ lưỡng</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Tư vấn chuyên nghiệp</h3>
                    <p className="text-gray-600">Đội ngũ chuyên gia giàu kinh nghiệm sẵn sàng hỗ trợ 24/7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Giá cả hợp lý</h3>
                    <p className="text-gray-600">Cam kết giá tốt nhất thị trường, không phát sinh chi phí ẩn</p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                <Link to="/about">Tìm hiểu thêm</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop"
                alt="About HomeFinder"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Bất động sản</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Khách hàng hài lòng</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Tỉnh thành</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Hỗ trợ khách hàng</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
