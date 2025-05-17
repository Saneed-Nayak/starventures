import React from 'react';
import { Link } from 'react-router-dom';
import { Cake, Truck, Guitar as Hospital, Calendar, Utensils, Users, ChevronRight } from 'lucide-react';
import { categories } from '../data/servicesData';

const ServicesPage: React.FC = () => {
  // Map category IDs to Lucide icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cake':
        return <Cake className="h-10 w-10" />;
      case 'Truck':
        return <Truck className="h-10 w-10" />;
      case 'Hospital':
        return <Hospital className="h-10 w-10" />;
      case 'Utensils':
        return <Utensils className="h-10 w-10" />;
      case 'CalendarCheck':
        return <Calendar className="h-10 w-10" />;
      default:
        return <Users className="h-10 w-10" />;
    }
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      { bg: 'bg-blue-50', text: 'text-blue-600', hover: 'hover:bg-blue-100', icon: 'text-blue-500' },
      { bg: 'bg-amber-50', text: 'text-amber-600', hover: 'hover:bg-amber-100', icon: 'text-amber-500' },
      { bg: 'bg-red-50', text: 'text-red-600', hover: 'hover:bg-red-100', icon: 'text-red-500' },
      { bg: 'bg-green-50', text: 'text-green-600', hover: 'hover:bg-green-100', icon: 'text-green-500' },
      { bg: 'bg-purple-50', text: 'text-purple-600', hover: 'hover:bg-purple-100', icon: 'text-purple-500' },
    ];
    return colors[index % colors.length];
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 pt-28 pb-20">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Directory</h1>
          <p className="text-xl max-w-3xl mx-auto mb-0">
            Find local services for all your needs in one convenient place
          </p>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse Service Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive directory of local service providers sorted by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const colorScheme = getCategoryColor(index);
              
              return (
                <Link
                  key={category.id}
                  to={`/services/${category.id}`}
                  className={`p-6 rounded-lg ${colorScheme.bg} ${colorScheme.hover} transition-colors duration-200 flex flex-col`}
                >
                  <div className={`${colorScheme.icon} mb-4`}>
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${colorScheme.text}`}>{category.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{category.count} providers</span>
                    <div className={`flex items-center ${colorScheme.text} font-medium`}>
                      <span>View All</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Finding and connecting with local service providers has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Categories</h3>
              <p className="text-gray-600">
                Explore various service categories or search for specific services you need
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Compare Providers</h3>
              <p className="text-gray-600">
                View details, compare ratings, and read information about each service provider
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact & Connect</h3>
              <p className="text-gray-600">
                Directly contact your chosen service provider via phone, email, or get directions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Let us help you find the right service provider for your specific needs
          </p>
          <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-blue-50">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;