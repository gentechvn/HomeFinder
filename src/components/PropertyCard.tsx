
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Property } from '@/types/property';
import { MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return (price / 1000000000).toFixed(1) + ' tỷ';
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

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-md">
      <Link to={`/property/${property.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-blue-600 hover:bg-blue-700">
              {getTypeLabel(property.type)}
            </Badge>
          </div>
          {property.isFeatured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-yellow-500 hover:bg-yellow-600">
                Nổi bật
              </Badge>
            </div>
          )}
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {property.title}
          </h3>
          
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
          
          <div className="flex justify-between items-center mb-3">
            <span className="text-2xl font-bold text-red-600">
              {formatPrice(property.price)}
            </span>
            <span className="text-sm text-gray-500">
              {property.area}m²
            </span>
          </div>
          
          {property.type !== 'land' && (
            <div className="flex space-x-4 text-sm text-gray-600">
              <span>{property.bedrooms} phòng ngủ</span>
              <span>{property.bathrooms} phòng tắm</span>
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  );
};

export default PropertyCard;
