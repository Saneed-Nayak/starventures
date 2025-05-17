import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, DollarSign, Phone, Mail, Calendar, Clock, Check, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { halls, Hall } from '../data/hallsData';

const HallDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hall, setHall] = useState<Hall | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  });

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundHall = halls.find(h => h.id === id);
      setHall(foundHall);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message (in a real app, would send to API)
    alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      guests: '',
      message: '',
    });
    setShowContactForm(false);
  };

  // Convert booked dates from strings to Date objects
  const bookedDates = hall?.bookedDates.map(dateStr => new Date(dateStr)) || [];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props: any) {
    const { onClick } = props;
    return (
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 z-10 shadow-md hover:bg-white"
        onClick={onClick}
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>
    );
  }
  
  function PrevArrow(props: any) {
    const { onClick } = props;
    return (
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 z-10 shadow-md hover:bg-white"
        onClick={onClick}
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
    );
  }

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

  if (!hall) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-start">
        <div className="text-center p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-2">Venue Not Found</h2>
          <p className="text-gray-600 mb-4">The marriage hall you're looking for doesn't exist or has been removed.</p>
          <Link to="/halls" className="btn btn-primary">
            Browse All Venues
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="pt-16">
        {/* Gallery Slider */}
        <div className="h-[60vh] relative">
          <Slider {...sliderSettings} className="h-full">
            {hall.images.map((image, index) => (
              <div key={index} className="outline-none h-[60vh]">
                <div className="h-full relative">
                  <img 
                    src={image} 
                    alt={`${hall.name} - Image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-32"></div>
                </div>
              </div>
            ))}
          </Slider>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <div className="container">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{hall.name}</h1>
              <div className="flex items-center text-white/90 mb-2">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{hall.location}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/90 rounded px-3 py-1 flex items-center">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                  <span className="ml-1 text-gray-800 font-medium">{hall.rating}/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Hall Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">About This Venue</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{hall.description}</p>
                
                <h3 className="text-xl font-semibold mb-3">Venue Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center p-3 bg-gray-50 rounded-md">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Capacity</p>
                      <p className="font-medium">Up to {hall.capacity} guests</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-md">
                    <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Price Per Day</p>
                      <p className="font-medium">${hall.pricePerDay.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-md">
                    <MapPin className="h-5 w-5 text-red-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Area</p>
                      <p className="font-medium">{hall.area}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-md">
                    <Clock className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Minimum Booking</p>
                      <p className="font-medium">1 day</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {hall.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <div className="bg-gray-100 rounded-lg p-3 mb-2">
                  <p className="text-gray-700">{hall.location}</p>
                </div>
                <a 
                  href={hall.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
            
            {/* Right Column - Booking & Contact */}
            <div>
              {/* Booking Widget */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Check Availability</h2>
                <div className="mb-4">
                  <label className="label">Select Date</label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MMMM d, yyyy"
                    minDate={new Date()}
                    excludeDates={bookedDates}
                    inline
                    className="w-full"
                  />
                </div>
                <div className="mt-4">
                  <button 
                    className="btn btn-primary w-full mb-3"
                    onClick={() => setShowContactForm(true)}
                    disabled={!selectedDate}
                  >
                    Book Now
                  </button>
                  <p className="text-sm text-gray-500 text-center">
                    * Dates in red are already booked
                  </p>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href={`tel:${hall.contact.phone}`} className="font-medium hover:text-blue-600">
                        {hall.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${hall.contact.email}`} className="font-medium hover:text-blue-600">
                        {hall.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <a 
                    href={`tel:${hall.contact.phone}`}
                    className="btn bg-green-600 hover:bg-green-700 text-white w-full flex justify-center items-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                  <a 
                    href={`https://wa.me/${hall.contact.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-green-500 hover:bg-green-600 text-white w-full flex justify-center items-center"
                  >
                    <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-xl font-bold">Book {hall.name}</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleBookingSubmit} className="p-6">
              <div className="grid gap-4">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="label">Event Date</label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      value={selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}
                      className="input bg-gray-100"
                      readOnly
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="label">Number of Guests</label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="input"
                      min="1"
                      max={hall.capacity}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="label">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="input min-h-[100px]"
                    rows={4}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

// Exported Star component for rating display
function Star(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
}

export default HallDetailsPage;