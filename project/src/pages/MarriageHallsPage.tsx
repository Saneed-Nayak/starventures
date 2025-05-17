import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, DollarSign, Star, Calendar, Search } from 'lucide-react';
import { halls } from '../data/hallsData';

const MarriageHallsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const filteredHalls = halls.filter((hall) => {
    // Filter by search term (name or description)
    const matchesSearch = searchTerm === '' || 
      hall.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hall.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by location
    const matchesLocation = location === '' || 
      hall.location.toLowerCase().includes(location.toLowerCase()) ||
      hall.area.toLowerCase().includes(location.toLowerCase());
    
    // Filter by capacity
    let matchesCapacity = true;
    if (capacity !== '') {
      const minCapacity = parseInt(capacity);
      matchesCapacity = hall.capacity >= minCapacity;
    }
    
    // Filter by price range
    let matchesPriceRange = true;
    if (priceRange !== '') {
      const [min, max] = priceRange.split('-');
      const minPrice = parseInt(min);
      const maxPrice = max === 'max' ? Infinity : parseInt(max);
      matchesPriceRange = hall.pricePerDay >= minPrice && hall.pricePerDay <= maxPrice;
    }
    
    return matchesSearch && matchesLocation && matchesCapacity && matchesPriceRange;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 pt-28 pb-20">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Marriage Halls</h1>
          <p className="text-xl max-w-3xl mx-auto mb-0">
            Find and book the perfect venue for your special occasion
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-md relative -mt-8 rounded-t-lg">
        <div className="container">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Find Your Perfect Venue</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label htmlFor="search" className="label">Search</label>
                <div className="relative">
                  <input
                    id="search"
                    type="text"
                    placeholder="Hall name or keyword"
                    className="input pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div>
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
              
              <div>
                <label htmlFor="capacity" className="label">Min. Capacity</label>
                <select
                  id="capacity"
                  className="input"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                >
                  <option value="">Any capacity</option>
                  <option value="100">100+ guests</option>
                  <option value="200">200+ guests</option>
                  <option value="300">300+ guests</option>
                  <option value="400">400+ guests</option>
                  <option value="500">500+ guests</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="price" className="label">Price Range</label>
                <select
                  id="price"
                  className="input"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option value="">Any price</option>
                  <option value="1000-3000">$1,000 - $3,000</option>
                  <option value="3000-5000">$3,000 - $5,000</option>
                  <option value="5000-max">$5,000+</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Halls Listing */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Available Venues</h2>
            <p className="text-gray-500">{filteredHalls.length} results found</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHalls.length > 0 ? (
              filteredHalls.map((hall) => (
                <Link to={`/halls/${hall.id}`} key={hall.id} className="block">
                  <div className="card overflow-hidden transition-transform hover:scale-105 duration-300">
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={hall.images[0]}
                        alt={hall.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="flex items-center">
                          <div className="bg-white/90 rounded px-2 py-1 flex items-center">
                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                            <span className="ml-1 text-gray-800 font-medium text-sm">{hall.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{hall.name}</h3>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{hall.area}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center text-gray-700">
                          <Users className="h-4 w-4 mr-1 text-blue-500" />
                          <span>Up to {hall.capacity}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                          <span>${hall.pricePerDay.toLocaleString()}/day</span>
                        </div>
                      </div>
                      <button className="btn btn-outline w-full">View Details</button>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-white rounded-lg">
                <div className="text-gray-500 mb-4">
                  <Calendar className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                  <h3 className="text-xl font-medium mb-2">No venues found</h3>
                  <p>Try adjusting your search criteria to find more options.</p>
                </div>
                <button 
                  className="btn btn-primary mt-4"
                  onClick={() => {
                    setSearchTerm('');
                    setLocation('');
                    setCapacity('');
                    setPriceRange('');
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Finding the Perfect Venue?</h2>
          <p className="text-blue-100 max-w-3xl mx-auto mb-8">
            Our venue experts can assist you in finding the perfect marriage hall based on your specific requirements and budget.
          </p>
          <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-blue-50">
            Contact Our Venue Experts
          </Link>
        </div>
      </section>
    </>
  );
};

export default MarriageHallsPage;