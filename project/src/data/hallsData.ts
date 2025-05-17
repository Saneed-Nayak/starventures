export interface Hall {
  id: string;
  name: string;
  location: string;
  area: string;
  capacity: number;
  pricePerDay: number;
  rating: number;
  images: string[];
  description: string;
  amenities: string[];
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  mapUrl: string;
  bookedDates: string[]; // ISO format dates
}

export const halls: Hall[] = [
  {
    id: 'royal-palace',
    name: 'Royal Palace',
    location: '123 Main Street, New York, NY',
    area: 'Downtown',
    capacity: 500,
    pricePerDay: 5000,
    rating: 4.8,
    images: [
      'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3066810/pexels-photo-3066810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'The Royal Palace is an elegant and luxurious venue that provides a stunning backdrop for your special day. With its grand ballroom, beautiful gardens, and exquisite catering services, the Royal Palace ensures a memorable experience for you and your guests.',
    amenities: [
      'Grand Ballroom',
      'Outdoor Garden',
      'Bridal Suite',
      'Valet Parking',
      'In-house Catering',
      'Sound System',
      'Customizable Lighting',
      'Air Conditioning'
    ],
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'info@royalpalace.com',
      website: 'www.royalpalace.com'
    },
    mapUrl: 'https://maps.google.com',
    bookedDates: [
      '2025-07-10',
      '2025-07-15',
      '2025-07-20',
      '2025-08-05',
      '2025-08-12'
    ]
  },
  {
    id: 'garden-dreams',
    name: 'Garden Dreams',
    location: '456 Park Avenue, Chicago, IL',
    area: 'North Side',
    capacity: 300,
    pricePerDay: 3500,
    rating: 4.6,
    images: [
      'https://images.pexels.com/photos/265920/pexels-photo-265920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4514514/pexels-photo-4514514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Garden Dreams offers a picturesque outdoor setting surrounded by lush gardens and beautiful landscapes. Perfect for nature lovers, this venue provides a serene atmosphere for your wedding or special event, with both outdoor and indoor options available.',
    amenities: [
      'Landscaped Gardens',
      'Covered Pavilion',
      'Water Features',
      'Changing Rooms',
      'Free Parking',
      'Event Coordination',
      'Tables and Chairs',
      'Outdoor Lighting'
    ],
    contact: {
      phone: '+1 (555) 987-6543',
      email: 'events@gardendreams.com',
      website: 'www.gardendreams.com'
    },
    mapUrl: 'https://maps.google.com',
    bookedDates: [
      '2025-06-15',
      '2025-06-25',
      '2025-07-04',
      '2025-07-30',
      '2025-08-20'
    ]
  },
  {
    id: 'crystal-ballroom',
    name: 'Crystal Ballroom',
    location: '789 Ocean Drive, Miami, FL',
    area: 'South Beach',
    capacity: 400,
    pricePerDay: 4200,
    rating: 4.7,
    images: [
      'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/572741/pexels-photo-572741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3316924/pexels-photo-3316924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'The Crystal Ballroom features a breathtaking interior with chandeliers and a sophisticated ambiance. Located near the beach, this venue offers stunning views and a versatile space that can be customized for weddings, corporate events, and social gatherings.',
    amenities: [
      'Grand Chandeliers',
      'Ocean View',
      'Dance Floor',
      'VIP Lounge',
      'Professional Staff',
      'Bar Services',
      'Audiovisual Equipment',
      'Wheelchair Accessible'
    ],
    contact: {
      phone: '+1 (555) 789-0123',
      email: 'bookings@crystalballroom.com',
      website: 'www.crystalballroom.com'
    },
    mapUrl: 'https://maps.google.com',
    bookedDates: [
      '2025-06-20',
      '2025-07-01',
      '2025-07-25',
      '2025-08-15',
      '2025-09-05'
    ]
  }
];