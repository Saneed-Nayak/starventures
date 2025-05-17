import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Star, ExternalLink, Globe, ArrowLeft, MessageSquare } from 'lucide-react';
import { serviceProviders, ServiceProvider } from '../data/servicesData';

const ServiceDetailsPage: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const [provider, setProvider] = useState<ServiceProvider | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundProvider = serviceProviders.find(p => p.id === id && p.category === category);
      setProvider(foundProvider);
      setLoading(false);
    }, 500);
  }, [id, category]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message (in a real app, would send to API)
    alert('Thank you for your message! The service provider will contact you shortly.');
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setShowContactForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-start">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!provider) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-start">
        <div className="text-center p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-2">Service Provider Not Found</h2>
          <p className="text-gray-600 mb-4">The service provider you're looking for doesn't exist or has been removed.</p>
          <Link to={`/services/${category}`} className="btn btn-primary">
            Browse All Providers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-64 relative">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${provider.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container relative h-full flex items-end pb-8">
          <div className="text-white">
            <Link 
              to={`/services/${category}`}
              className="inline-flex items-center text-white/90 hover:text-white mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back to {category}</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">{provider.name}</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Left Content */}
            <div className="md:w-2/3 p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                  <span className="font-medium">{provider.rating}/5</span>
                </div>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-gray-500">{provider.category}</span>
              </div>

              <div className="mb-8">
                <img 
                  src={provider.image} 
                  alt={provider.name}
                  className="w-full h-64 object-cover rounded-lg mb-6" 
                />
                <h2 className="text-2xl font-bold mb-4">About {provider.name}</h2>
                <p className="text-gray-700 mb-4">{provider.description}</p>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="text-gray-700 mb-2">{provider.location}</p>
                <a 
                  href={provider.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium mb-6"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>

                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Map would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="md:w-1/3 bg-gray-50 p-6 border-l">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href={`tel:${provider.contact.phone}`} className="font-medium hover:text-blue-600">
                      {provider.contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${provider.contact.email}`} className="font-medium hover:text-blue-600">
                      {provider.contact.email}
                    </a>
                  </div>
                </div>
                
                {provider.contact.website && (
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">Website</p>
                      <a 
                        href={`https://${provider.contact.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium hover:text-blue-600"
                      >
                        {provider.contact.website}
                      </a>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Business Hours</p>
                    <p className="font-medium">{provider.hours}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <a 
                  href={`tel:${provider.contact.phone}`}
                  className="btn bg-green-600 hover:bg-green-700 text-white w-full flex justify-center items-center"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
                
                <a 
                  href={`https://wa.me/${provider.contact.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-green-500 hover:bg-green-600 text-white w-full flex justify-center items-center"
                >
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="btn btn-outline w-full flex justify-center items-center"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Message
                </button>
                
                <a 
                  href={provider.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full flex justify-center items-center"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-xl font-bold">Contact {provider.name}</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="label">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="input min-h-[120px]"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailsPage;