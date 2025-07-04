import { useState, useMemo } from 'react';
import { allProperties } from '@/data/properties';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { SearchFilters } from '@/types/property';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Properties = () => {
  const [filters, setFilters] = useState<SearchFilters>({});
  const [activeTab, setActiveTab] = useState<'hot' | 'all'>('hot');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Lọc properties theo filters
  const filteredProperties = useMemo(() => {
    return allProperties.filter(property => {
      // Lọc theo địa điểm
      if (filters.location && !property.location.includes(filters.location)) {
        return false;
      }

      // Lọc theo loại
      if (filters.type && property.type !== filters.type) {
        return false;
      }

      // Lọc theo giá
      if (filters.minPrice && property.price < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice && property.price > filters.maxPrice) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Sắp xếp properties
  const sortedProperties = useMemo(() => {
    if (activeTab === 'hot') {
      return [...filteredProperties]
        .sort((a, b) => b.views - a.views)
        .slice(0, 6); // Chỉ lấy 6 hot nhất
    } else {
      return [...filteredProperties]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
  }, [filteredProperties, activeTab]);

  // Phân trang
  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage);
  const paginatedProperties = useMemo(() => {
    if (activeTab === 'hot') {
      return sortedProperties; // Hot tab không cần phân trang
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedProperties.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedProperties, currentPage, activeTab]);

  const handleTabChange = (tab: 'hot' | 'all') => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Danh sách <span className="text-blue-600">Bất động sản</span>
        </h1>
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <Button
              variant={activeTab === 'hot' ? 'default' : 'ghost'}
              onClick={() => handleTabChange('hot')}
              className="mr-2"
            >
              🔥 Hot ({allProperties.filter(p => p.views > 1000).length})
            </Button>
            <Button
              variant={activeTab === 'all' ? 'default' : 'ghost'}
              onClick={() => handleTabChange('all')}
            >
              📋 Tất cả ({filteredProperties.length})
            </Button>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            {activeTab === 'hot' 
              ? `Hiển thị ${Math.min(6, sortedProperties.length)} bất động sản hot nhất`
              : `Hiển thị ${paginatedProperties.length} trên ${sortedProperties.length} bất động sản`
            }
          </p>
          {activeTab === 'all' && (
            <p className="text-sm text-gray-500">
              Sắp xếp theo: Mới nhất
            </p>
          )}
        </div>

        {/* Properties Grid */}
        {paginatedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedProperties.map((property) => (
              <div key={property.id} className="relative">
                <PropertyCard property={property} />
                {activeTab === 'hot' && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    👁️ {property.views.toLocaleString()}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Không tìm thấy bất động sản
            </h3>
            <p className="text-gray-600 mb-4">
              Hãy thử điều chỉnh bộ lọc để tìm kiếm kết quả phù hợp hơn.
            </p>
            <Button onClick={() => setFilters({})}>
              Xóa bộ lọc
            </Button>
          </div>
        )}

        {/* Pagination - chỉ hiển thị cho tab "all" */}
        {activeTab === 'all' && totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage - 1);
                      }}
                    />
                  </PaginationItem>
                )}
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={page === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage + 1);
                      }}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
