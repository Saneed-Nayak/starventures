import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Star, Clock, Search, ExternalLink } from 'lucide-react';
import { serviceProviders, categories } from '../data/servicesData';

const ServiceCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const locationQuery = searchParams.get('location') || '';
  
  const [search, setSearch] = useState(searchTerm);
  const [location, setLocation] = useState(locationQuery);
  const navigate = useNavigate();

  const categoryInfo = categories.find(c => c.id === category);
  
  useEffect(() => {
    setSearch(searchTerm);
    setLocation(locationQuery);
  }, [searchTerm, locationQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/services/${category}?search=${search}&location=${location}`);
  };

  const providers = serviceProviders.filter(provider => {
    // First filter by category
    if (provider.category !== category) return false;
    
    // Then by search term if provided
    const matchesSearch = !search || 
      provider.name.toLowerCase().includes(search.toLowerCase()) ||
      provider.description.toLowerCase().includes(search.toLowerCase());
    
    // Then by location if provided
    const matchesLocation = !location || 
      provider.location.toLowerCase().includes(location.toLowerCase()) ||
      provider.area.toLowerCase().includes(location.toLowerCase());
    
    return matchesSearch && matchesLocation;
  });

  if (!categoryInfo) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-start">
        <div className="text-center p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-2">Category Not Found</h2>
          <p className="text-gray-600 mb-4">The service category you're looking for doesn't exist.</p>
          <Link to="/services" className="btn btn-primary">
            Browse All Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 pt-28 pb-20">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{categoryInfo.name}</h1>
          <p className="text-xl max-w-3xl mx-auto mb-0">
            {categoryInfo.description}
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white shadow-md relative -mt-8 rounded-t-lg">
        <div className="container">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Find {categoryInfo.name}</h2>
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="search" className="label">Search</label>
                <div className="relative">
                  <input
                    id="search"
                    type="text"
                    placeholder={`Search ${categoryInfo.name}`}
                    className="input pl-10"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="flex-1">
                <label htmlFor="location" className="label">Location</label>
                <div className="relative">
                  <input
                    id="location"
                    type="text"
                    placeholder="City or area"
                    className="input pl-10"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="flex items-end">
                <button type="submit" className="btn btn-primary h-10 px-6">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Providers Listing */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">{categoryInfo.name} Providers</h2>
            <p className="text-gray-500">{providers.length} results found</p>
          </div>

          {providers.length > 0 ? (
            <div className="space-y-6">
              {providers.map((provider) => (
                <Link 
                  key={provider.id} 
                  to={`/services/${category}/${provider.id}`}
                  className="block"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3 lg:w-1/4">
                        <img
                          src={provider.image}
                          alt={provider.name}
                          className="h-48 w-full md:h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3 lg:w-3/4">
                        <div className="flex flex-wrap items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold">{provider.name}</h3>
                          <div className="flex items-center bg-gray-100 px-2 py-1 rounded">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                            <span className="font-medium">{provider.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{provider.area}, {provider.location.split(',')[0]}</span>
                        </div>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">{provider.description}</p>
                        
                        <div className="flex flex-wrap items-center justify-between mt-4">
                          <div className="flex items-center text-gray-600 mb-2 md:mb-0">
                            <Clock className="h-4 w-4 mr-1" />
                            <span className="text-sm">{provider.hours}</span>
                          </div>
                          
                          <div className="flex space-x-3">
                            <a 
                              href={`tel:${provider.contact.phone}`}
                              className="flex items-center text-blue-600 hover:text-blue-800"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              <span>Call</span>
                            </a>
                            <a 
                              href={provider.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-blue-600 hover:text-blue-800"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              <span>Directions</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <div className="text-gray-500 mb-4">
                <Search className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                <h3 className="text-xl font-medium mb-2">No providers found</h3>
                <p>Try adjusting your search criteria or browse other categories.</p>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <button 
                  className="btn btn-outline"
                  onClick={() => {
                    setSearch('');
                    setLocation('');
                    navigate(`/services/${category}`);
                  }}
                >
                  Clear Search
                </button>
                <Link to="/services" className="btn btn-primary">
                  All Categories
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Explore Other Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {categories
              .filter(c => c.id !== category)
              .map(c => (
                <Link
                  key={c.id}
                  to={`/services/${c.id}`}
                  className="block bg-gray-50 hover:bg-gray-100 p-4 rounded-lg text-center transition-colors"
                >
                  <h3 className="font-medium text-gray-900">{c.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{c.count} providers</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCategoryPage;