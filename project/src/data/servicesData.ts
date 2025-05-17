export interface ServiceProvider {
  id: string;
  name: string;
  category: string;
  location: string;
  area: string;
  description: string;
  rating: number;
  image: string;
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  hours: string;
  mapUrl: string;
  featured?: boolean;
}

export const categories = [
  {
    id: 'bakeries',
    name: 'Bakeries',
    description: 'Find local bakeries for cakes, pastries, and desserts',
    icon: 'Cake',
    count: 12,
  },
  {
    id: 'towing',
    name: 'Vehicle Towing',
    description: 'Emergency vehicle towing and roadside assistance services',
    icon: 'Truck',
    count: 8,
  },
  {
    id: 'hospitals',
    name: 'Hospitals',
    description: 'Locate hospitals and medical facilities in your area',
    icon: 'Hospital',
    count: 15,
  },
  {
    id: 'caterers',
    name: 'Caterers',
    description: 'Professional catering services for all types of events',
    icon: 'Utensils',
    count: 10,
  },
  {
    id: 'planners',
    name: 'Event Planners',
    description: 'Professional event planning and coordination services',
    icon: 'CalendarCheck',
    count: 9,
  },
];

export const serviceProviders: ServiceProvider[] = [
  // Bakeries
  {
    id: 'sweet-delights',
    name: 'Sweet Delights Bakery',
    category: 'bakeries',
    location: '123 Baker Street, New York, NY',
    area: 'Downtown',
    description: 'Specializing in custom cakes, pastries, and desserts for all occasions. Our expert bakers create beautiful and delicious treats for weddings, birthdays, and special events.',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1359330/pexels-photo-1359330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'orders@sweetdelights.com',
      website: 'www.sweetdelights.com'
    },
    hours: 'Mon-Sat: 7AM-7PM, Sun: 8AM-5PM',
    mapUrl: 'https://maps.google.com',
    featured: true
  },
  {
    id: 'flour-power',
    name: 'Flour Power',
    category: 'bakeries',
    location: '456 Main Street, Chicago, IL',
    area: 'West Loop',
    description: 'A family-owned bakery known for artisanal bread, gourmet cakes, and European-style pastries. We use traditional baking methods and the finest ingredients.',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: {
      phone: '+1 (555) 987-6543',
      email: 'info@flourpower.com',
      website: 'www.flourpower.com'
    },
    hours: 'Tue-Sat: 7AM-6PM, Sun: 8AM-3PM, Mon: Closed',
    mapUrl: 'https://maps.google.com'
  },
  {
    id: 'cake-palace',
    name: 'Cake Palace',
    category: 'bakeries',
    location: '789 Pastry Lane, Los Angeles, CA',
    area: 'Beverly Hills',
    description: 'Luxury cake design studio specializing in elaborate wedding cakes and high-end desserts. Our award-winning designs have been featured in major wedding magazines.',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: {
      phone: '+1 (555) 789-0123',
      email: 'design@cakepalace.com',
      website: 'www.cakepalace.com'
    },
    hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: By Appointment',
    mapUrl: 'https://maps.google.com',
    featured: true
  },
  
  // Vehicle Towing
  {
    id: 'rapid-towing',
    name: 'Rapid Towing & Recovery',
    category: 'towing',
    location: '101 Highway Drive, Houston, TX',
    area: 'North Houston',
    description: '24/7 emergency towing service with fast response times. We handle all types of vehicles from cars and motorcycles to large trucks and RVs.',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/7801849/pexels-photo-7801849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: {
      phone: '+1 (555) 456-7890',
      email: 'dispatch@rapidtowing.com',
      website: 'www.rapidtowing.com'
    },
    hours: 'Open 24/7',
    mapUrl: 'https://maps.google.com',
    featured: true
  },
  {
    id: 'reliable-tow',
    name: 'Reliable Tow & Transport',
    category: 'towing',
    location: '202 Roadside Ave, Phoenix, AZ',
    area: 'Central Phoenix',
    description: 'Family-owned towing company with over 20 years of experience. We provide roadside assistance, recovery services, and long-distance towing.',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/1797456/pexels-photo-1797456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: {
      phone: '+1 (555) 234-5678',
      email: 'service@reliabletow.com',
      website: 'www.reliabletow.com'
    },
    hours: 'Open 24/7',
    mapUrl: 'https://maps.google.com'
  },
  {
    id: 'eagle-towing',
    name: 'Eagle Towing Services',
    category: 'towing',
    location: '303 Emergency Road, Dallas, TX',
    area: 'South Dallas',
    description: 'Professional towing and recovery with state-of-the-art equipment. Specializing in accident recovery, heavy-duty towing, and equipment transport.',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/9028879/pexels-photo-9028879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: {
      phone: '+1 (555) 345-6789',
      email: 'help@eagletowing.com',
      website: 'www.eagletowing.com'
    },
    hours: 'Open 24/7',
    mapUrl: 'https://maps.google.com'
  },
  
  // Hospitals
  {
    id: 'central-medical',
    name: 'Central Medical Center',
    category: 'hospitals',
    location: '505 Health Avenue, Boston, MA',
    area: 'Downtown Boston',
    description: 'Full-service hospital with emergency care, specialty departments, and advanced diagnostic facilities. Our award-winning staff provides comprehensive healthcare services.',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: {
      phone: '+1 (555) 567-8901',
      email: 'info@centralmedical.com',
      website: 'www.centralmedical.com'
    },
    hours: 'Open 24/7',
    mapUrl: 'https://maps.google.com',
    featured: true
  },
  {
    id: 'mercy-hospital',
    name: 'Mercy Hospital',
    category: 'hospitals',
    location: '606 Care Lane, Seattle, WA',
    area: 'North Seattle',
    description: 'Community hospital providing compassionate care with a focus on patient comfort and well-being. Featuring modern facilities and a dedicated team of healthcare professionals.',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: {
      phone: '+1 (555) 678-9012',
      email: 'patients@mercyhospital.com',
      website: 'www.mercyhospital.com'
    },
    hours: 'Open 24/7',
    mapUrl: 'https://maps.google.com'
  },
  {
    id: 'lifecare-medical',
    name: 'LifeCare Medical Center',
    category: 'hospitals',
    location: '707 Wellness Road, Denver, CO',
    area: 'East Denver',
    description: 'Specialized medical center focusing on advanced treatments and cutting-edge medical technology. Our facilities include emergency services, surgical departments, and rehabilitation centers.',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/3846901/pexels-photo-3846901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    contact: {
      phone: '+1 (555) 789-0123',
      email: 'care@lifecaremedical.com',
      website: 'www.lifecaremedical.com'
    },
    hours: 'Open 24/7',
    mapUrl: 'https://maps.google.com'
  }
];