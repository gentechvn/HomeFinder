import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

interface HeroSectionProps {
  onSearch?: (filters: { location: string; type: string; priceRange: string }) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [searchData, setSearchData] = useState({
    location: '',
    type: '',
    priceRange: ''
  });

  const handleSearch = () => {
    if (onSearch) onSearch(searchData);
  };

  return (
    <div className="relative h-[600px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=600&fit=crop")'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tìm Ngôi Nhà <span className="text-yellow-400">Hoàn Hảo</span>
            <br />Cho Bạn
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Khám phá hàng nghìn bất động sản chất lượng tại Việt Nam
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-xl p-6 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Vị trí</label>
                <Input
                  placeholder="Nhập tỉnh, thành phố..."
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                  className="h-12 text-gray-800"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Loại bất động sản</label>
                <Select value={searchData.type} onValueChange={(value) => setSearchData({...searchData, type: value})}>
                  <SelectTrigger className="h-12 text-gray-800">
                    <SelectValue placeholder="Chọn loại" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Căn hộ</SelectItem>
                    <SelectItem value="house">Nhà phố</SelectItem>
                    <SelectItem value="land">Đất nền</SelectItem>
                    <SelectItem value="commercial">Thương mại</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Khoảng giá</label>
                <Select value={searchData.priceRange} onValueChange={(value) => setSearchData({...searchData, priceRange: value})}>
                  <SelectTrigger className="h-12 text-gray-800">
                    <SelectValue placeholder="Chọn giá" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1b">Dưới 1 tỷ</SelectItem>
                    <SelectItem value="1b-3b">1 - 3 tỷ</SelectItem>
                    <SelectItem value="3b-5b">3 - 5 tỷ</SelectItem>
                    <SelectItem value="above-5b">Trên 5 tỷ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleSearch}
                className="h-12 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-8"
              >
                <Search className="w-5 h-5 mr-2" />
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
