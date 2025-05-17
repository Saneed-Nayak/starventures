import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Cake, Truck, Guitar as Hospital, Star, ChevronRight } from 'lucide-react';
import SearchBar from '../components/ui/SearchBar';

const HomePage: React.FC = () => {
  const featuredServices = [
    {
      id: 1,
      title: 'Book Marriage Hall',
      description: 'Find and book the perfect venue for your special day',
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      path: '/halls',
      color: 'bg-blue-50',
    },
    {
      id: 2,
      title: 'Find Bakery',
      description: 'Discover local bakeries for cakes and desserts',
      icon: <Cake className="h-8 w-8 text-amber-500" />,
      path: '/services/bakeries',
      color: 'bg-amber-50',
    },
    {
      id: 3,
      title: 'Need Towing',
      description: 'Emergency vehicle towing services available 24/7',
      icon: <Truck className="h-8 w-8 text-red-500" />,
      path: '/services/towing',
      color: 'bg-red-50',
    },
    {
      id: 4,
      title: 'Locate Hospital',
      description: 'Find nearest hospitals and healthcare facilities',
      icon: <Hospital className="h-8 w-8 text-green-500" />,
      path: '/services/hospitals',
      color: 'bg-green-50',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Bride',
      content: 'LocalHub made finding our perfect wedding venue so easy! We booked Grand Palace for our special day and everything went perfectly.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Brown',
      role: 'Event Organizer',
      content: 'As an event planner, I regularly use LocalHub to find vendors. The service listings are comprehensive and the booking process is seamless.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Local Resident',
      content: 'When my car broke down, I quickly found a towing service through LocalHub. The service was prompt and professional. Highly recommended!',
      rating: 4,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Find Local Services <br className="hidden md:block" /> & Book Marriage Halls
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-white/90">
            Your one-stop destination for finding local services and booking the perfect venue for your special occasions
          </p>
          <SearchBar />
        </div>
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover top-rated local services and perfect venues for your events, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredServices.map((service) => (
              <Link 
                key={service.id} 
                to={service.path}
                className={`card p-6 ${service.color} border border-gray-100 hover:scale-105 transition-transform duration-300`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-blue-600 mb-2">200+</p>
              <p className="text-gray-600">Marriage Halls</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-gray-600">Service Providers</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-blue-600 mb-2">10k+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
              <p className="text-gray-600">Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from people who have found the perfect services through our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card p-6 bg-gray-50 border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center text-blue-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Perfect Services?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Start exploring our comprehensive directory of services and marriage halls
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/halls" className="btn bg-white text-blue-600 hover:bg-blue-50">
              Browse Marriage Halls
            </Link>
            <Link to="/services" className="btn bg-blue-700 text-white hover:bg-blue-800">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;