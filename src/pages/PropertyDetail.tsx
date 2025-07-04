
import { useParams, Link } from 'react-router-dom';
import { allProperties } from '@/data/properties';
import ImageGallery from '@/components/ImageGallery';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Bath, 
  Bed, 
  Square, 
  Phone, 
  Mail, 
  User, 
  Eye,
  Calendar,
  ArrowLeft
} from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = allProperties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Không tìm thấy bất động sản</h1>
          <p className="text-gray-600 mb-6">Bất động sản bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/properties">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return (price / 1000000000).toFixed(1) + ' tỷ VND';
  };

  const getTypeLabel = (type: string) => {
    const types = {
      apartment: 'Căn hộ',
      house: 'Nhà phố',
      land: 'Đất nền',
      commercial: 'Thương mại'
    };
    return types[type as keyof typeof types] || type;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN');
  };

  // Lấy các bất động sản tương tự
  const similarProperties = allProperties
    .filter(p => p.id !== property.id && (p.type === property.type || p.location.includes(property.location.split(',')[0])))
    .slice(0, 3);

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
          <span>/</span>
          <Link to="/properties" className="hover:text-blue-600">Bất động sản</Link>
          <span>/</span>
          <span className="text-gray-900">{property.title}</span>
        </div>

        {/* Back Button */}
        <Link to="/properties" className="inline-flex items-center mb-6">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại danh sách
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Badges */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-blue-600 hover:bg-blue-700">
                  {getTypeLabel(property.type)}
                </Badge>
                {property.isFeatured && (
                  <Badge className="bg-yellow-500 hover:bg-yellow-600">
                    Nổi bật
                  </Badge>
                )}
                <Badge variant="outline" className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {property.views.toLocaleString()} lượt xem
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Image Gallery */}
            <ImageGallery images={property.images} title={property.title} />

            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle>Thông tin chi tiết</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Square className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Diện tích</p>
                      <p className="font-semibold">{property.area}m²</p>
                    </div>
                  </div>
                  
                  {property.type !== 'land' && (
                    <>
                      <div className="flex items-center space-x-2">
                        <Bed className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-600">Phòng ngủ</p>
                          <p className="font-semibold">{property.bedrooms}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Bath className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-600">Phòng tắm</p>
                          <p className="font-semibold">{property.bathrooms}</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Ngày đăng</p>
                      <p className="font-semibold">{formatDate(property.createdAt)}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Mô tả</h3>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </div>

                {property.features.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-semibold mb-3">Tiện ích</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price & Contact */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-red-600 mb-2">
                    {formatPrice(property.price)}
                  </p>
                  <p className="text-gray-600">
                    {(property.price / property.area / 1000000).toFixed(1)} triệu/m²
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <User className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold">{property.contact.name}</p>
                      <p className="text-sm text-gray-600">Người liên hệ</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">{property.contact.phone}</p>
                      <p className="text-sm text-gray-600">Số điện thoại</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">{property.contact.email}</p>
                      <p className="text-sm text-gray-600">Email</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <Button className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Gọi ngay
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Gửi email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Vị trí</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p>Bản đồ sẽ được hiển thị tại đây</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Bất động sản tương tự</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((similarProperty) => (
                <PropertyCard key={similarProperty.id} property={similarProperty} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;
