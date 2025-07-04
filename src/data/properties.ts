
import { Property } from '@/types/property';

export const featuredProperties: Property[] = [
  {
    id: '1',
    title: 'Căn hộ cao cấp The Manor',
    price: 3200000000,
    location: 'Quận 1, TP.HCM',
    area: 85,
    bedrooms: 2,
    bathrooms: 2,
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop'
    ],
    description: 'Căn hộ cao cấp với view thành phố tuyệt đẹp, nội thất hiện đại, đầy đủ tiện ích.',
    features: ['Hồ bơi', 'Gym', 'Bảo vệ 24/7', 'Thang máy', 'Chỗ đỗ xe'],
    isFeatured: true,
    views: 1250,
    createdAt: '2025-07-04',
    contact: {
      name: 'Nguyễn Văn A',
      phone: '0911091506',
      email: 'ngkhacthinh29@gmail.com'
    }
  },
  {
    id: '2',
    title: 'Nhà phố liền kề Gamuda Gardens',
    price: 4500000000,
    location: 'Hoàng Mai, Hà Nội',
    area: 120,
    bedrooms: 3,
    bathrooms: 3,
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop'
    ],
    description: 'Nhà phố hiện đại trong khu đô thị Gamuda, môi trường xanh sạch, an ninh tốt.',
    features: ['Sân vườn', 'Gara ô tô', '3 tầng', 'Khu an ninh', 'Gần trường học'],
    isFeatured: true,
    views: 980,
    createdAt: '2025-07-04',
    contact: {
      name: 'Trần Thị B',
      phone: '0911091506',
      email: 'ngkhacthinh29@gmail.com'
    }
  },
  {
    id: '3',
    title: 'Đất nền dự án Vinhomes Grand Park',
    price: 2800000000,
    location: 'Quận 9, TP.HCM',
    area: 100,
    bedrooms: 0,
    bathrooms: 0,
    type: 'land',
    images: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop'
    ],
    description: 'Đất nền đẹp trong dự án Vinhomes Grand Park, pháp lý rõ ràng, hạ tầng hoàn thiện.',
    features: ['Pháp lý rõ ràng', 'Hạ tầng hoàn thiện', 'Gần trung tâm', 'Tiềm năng tăng giá'],
    isFeatured: true,
    views: 1450,
    createdAt: '2025-07-04',
    contact: {
      name: 'Phạm Văn C',
      phone: '0911091506',
      email: 'ngkhacthinh29@gmail.com'
    }
  }
];

export const allProperties: Property[] = [
  ...featuredProperties,
  {
    id: '4',
    title: 'Chung cư mini Đống Đa',
    price: 1200000000,
    location: 'Đống Đa, Hà Nội',
    area: 45,
    bedrooms: 1,
    bathrooms: 1,
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop'
    ],
    description: 'Chung cư mini giá rẻ, phù hợp cho sinh viên và người trẻ.',
    features: ['Gần trường đại học', 'Giá rẻ', 'Đầy đủ nội thất'],
    isFeatured: false,
    views: 456,
    createdAt: '2025-07-04',
    contact: {
      name: 'Lê Thị D',
      phone: '0911091506',
      email: 'ngkhacthinh29@gmail.com'
    }
  },
  {
    id: '5',
    title: 'Villa Thảo Điền view sông',
    price: 15000000000,
    location: 'Quận 2, TP.HCM',
    area: 300,
    bedrooms: 4,
    bathrooms: 5,
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop'
    ],
    description: 'Villa sang trọng view sông Sài Gòn, thiết kế hiện đại, không gian thoáng mát.',
    features: ['View sông', 'Hồ bơi riêng', 'Sân vườn lớn', 'Garage 2 xe', 'An ninh cao cấp'],
    isFeatured: false,
    views: 2100,
    createdAt: '2025-07-04',
    contact: {
      name: 'Hoàng Minh E',
      phone: '0911091506',
      email: 'ngkhacthinh29@gmail.com'
    }
  },
  {
    id: '6',
    title: 'Shophouse Vinhomes Central Park',
    price: 8500000000,
    location: 'Bình Thạnh, TP.HCM',
    area: 150,
    bedrooms: 0,
    bathrooms: 2,
    type: 'commercial',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    ],
    description: 'Shophouse mặt tiền đường lớn, vị trí kinh doanh đắc địa, tiềm năng sinh lời cao.',
    features: ['Mặt tiền đường lớn', 'Khu dân cư đông đúc', 'Hạ tầng hoàn thiện', '3 tầng'],
    isFeatured: false,
    views: 1800,
    createdAt: '2025-07-04',
    contact: {
      name: 'Nguyễn Thị F',
      phone: '0911091506',
      email: 'ngkhacthinh29@gmail.com'
    }
  },
  {
    id: '7',
    title: 'Căn hộ Studio Quận 7',
    price: 1800000000,
    location: 'Quận 7, TP.HCM',
    area: 35,
    bedrooms: 1,
    bathrooms: 1,
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop'
    ],
    description: 'Studio hiện đại, thiết kế thông minh tối ưu không gian, view đẹp.',
    features: ['Nội thất cao cấp', 'View thành phố', 'Gần trung tâm thương mại', 'Bảo vệ 24/7'],
    isFeatured: false,
    views: 720,
    createdAt: '2025-07-04',
    contact: {
      name: 'Trần Văn G',
      phone: '0911091506',
      email: 'ngkhacthinh29@gmail.com'
    }
  },
  {
    id: '8',
    title: 'Đất thổ cư Bình Chánh',
    price: 2200000000,
    location: 'Bình Chánh, TP.HCM',
    area: 120,
    bedrooms: 0,
    bathrooms: 0,
    type: 'land',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
    ],
    description: 'Đất thổ cư 100%, mặt tiền đường nhựa, phù hợp xây nhà ở hoặc đầu tư.',
    features: ['Thổ cư 100%', 'Mặt tiền đường', 'Gần chợ', 'Điện nước đầy đủ'],
    isFeatured: false,
    views: 340,
    createdAt: '2025-07-04',
    contact: {
      name: 'Lý Thị H',
      phone: '0911091506',
      email: 'ngkhacthinh29@gmail.com'
    }
  },
  {
    id: '9',
    title: 'Penthouse Landmark 81',
    price: 25000000000,
    location: 'Vinhomes Central Park, TP.HCM',
    area: 400,
    bedrooms: 5,
    bathrooms: 6,
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop'
    ],
    description: 'Penthouse siêu sang với view 360 độ toàn thành phố, nội thất châu Âu.',
    features: ['View 360 độ', 'Nội thất châu Âu', 'Sân thượng riêng', 'Thang máy riêng', 'Butler service'],
    isFeatured: false,
    views: 3200,
    createdAt: '2025-07-04',
    contact: {
      name: 'Vũ Minh I',
      phone: '0911091506',
      email: 'ngkhacthinh29@gmail.com'
    }
  },
  {
    id: '10',
    title: 'Nhà mặt phố Hoàn Kiếm',
    price: 12000000000,
    location: 'Hoàn Kiếm, Hà Nội',
    area: 80,
    bedrooms: 3,
    bathrooms: 2,
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop'
    ],
    description: 'Nhà mặt phố trung tâm Hà Nội, vị trí vàng kinh doanh, giao thông thuận lợi.',
    features: ['Mặt phố lớn', 'Vị trí trung tâm', 'Kinh doanh tốt', '4 tầng', 'Sổ đỏ chính chủ'],
    isFeatured: false,
    views: 1900,
    createdAt: '2025-07-04',
    contact: {
      name: 'Đào Văn J',
      phone: '0911091506',
      email: 'ngkhacthinh29@gmail.com'
    }
  }
];
