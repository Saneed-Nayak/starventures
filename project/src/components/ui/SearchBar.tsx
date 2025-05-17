import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('all');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (category === 'halls') {
      navigate(`/halls?search=${searchTerm}&location=${location}`);
    } else if (category !== 'all') {
      navigate(`/services/${category}?search=${searchTerm}&location=${location}`);
    } else {
      navigate(`/services?search=${searchTerm}&location=${location}`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-2 max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row">
        <div className="flex-1 flex items-center px-3 py-2 md:border-r border-gray-200">
          <Search className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for services..."
            className="w-full focus:outline-none text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex-1 flex items-center px-3 py-2 md:border-r border-gray-200">
          <MapPin className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Location"
            className="w-full focus:outline-none text-gray-700"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="flex items-center px-3 py-2">
          <select
            className="w-full focus:outline-none text-gray-700 bg-transparent"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="halls">Marriage Halls</option>
            <option value="bakeries">Bakeries</option>
            <option value="towing">Vehicle Towing</option>
            <option value="hospitals">Hospitals</option>
            <option value="caterers">Caterers</option>
            <option value="planners">Event Planners</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-2 md:mt-0 md:ml-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;