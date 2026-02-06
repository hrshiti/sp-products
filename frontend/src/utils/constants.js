export const CATEGORIES = [
  'Fashion',
  'Electronics',
  'Mobile',
  'Laptop',
  'Camera',
  'Shoes',
  'Watch',
  'Gaming',
  'Books',
  'Home Appliances',
  'Dry Fruits',
]

export const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: 'Premium California Almonds (1kg)',
    category: 'Dry Fruits',
    basePrice: 500,
    currentBid: 850,
    timeLeftSeconds: 2 * 60 * 60,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&q=80',
      'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&q=80',
      'https://images.unsplash.com/photo-1516550893881-71fb70e7e727?w=600&q=80',
    ],
    description: 'Experience the crunch of premium California almonds. Handpicked for quality and freshness, these almonds are perfect for snacking, baking, or gifting. Rich in protein, fiber, and healthy fats.',
    specifications: {
      'Weight': '1 kg',
      'Origin': 'California, USA',
      'Type': 'Raw',
      'Shelf Life': '6 Months',
    },
    rating: 4.8,
    reviewsCount: 124,
    seller: 'Nature Basket',
    imageColor: 'bg-amber-100',
    bids: [
      { user: 'User123', amount: 850, time: '2m ago' },
      { user: 'User421', amount: 800, time: '5m ago' },
      { user: 'User009', amount: 750, time: '12m ago' },
    ],
  },
  {
    id: 2,
    name: 'Premium Cashews W320',
    category: 'Dry Fruits',
    basePrice: 450,
    currentBid: 720,
    timeLeftSeconds: 45 * 60,
    image: 'https://images.unsplash.com/photo-1585072368324-ab8dfcc0f613?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1585072368324-ab8dfcc0f613?w=600&q=80',
      'https://images.unsplash.com/photo-1536591375315-1988d6960991?w=600&q=80',
    ],
    description: 'Delightfully creamy and crunchy W320 grade cashews. Sourced directly from farms, processed with care to retain natural flavor and nutrients.',
    specifications: {
      'Grade': 'W320',
      'Weight': '500g',
      'Processing': 'Roasted',
      'Allergen Info': 'Contains Nuts',
    },
    rating: 4.5,
    reviewsCount: 89,
    seller: 'Organic Treats',
    imageColor: 'bg-yellow-100',
    bids: [
      { user: 'User210', amount: 720, time: '1m ago' },
      { user: 'User331', amount: 690, time: '10m ago' },
    ],
  },
  {
    id: 3,
    name: 'Classic Summer Cotton T-Shirt',
    category: 'Fashion',
    basePrice: 799,
    currentBid: 1049,
    timeLeftSeconds: 15 * 60,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80',
    ],
    description: 'Stay cool and stylish with this 100% organic cotton t-shirt. Breathable fabric, relaxed fit, and durable stitching make it a summer essential.',
    specifications: {
      'Material': '100% Cotton',
      'Size': 'L',
      'Color': 'White/Black',
      'Fit': 'Regular',
    },
    rating: 4.2,
    reviewsCount: 250,
    seller: 'Urban Fashion',
    imageColor: 'bg-sky-100',
    bids: [
      { user: 'User555', amount: 1049, time: '30s ago' },
      { user: 'User101', amount: 999, time: '2m ago' },
    ],
  },
  {
    id: 4,
    name: 'Smartwatch Series X - Midnight',
    category: 'Watch',
    basePrice: 2499,
    currentBid: 3120,
    timeLeftSeconds: 5 * 60,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80',
    ],
    description: 'Track your fitness, notifications, and more with the Series X. Features an AMOLED display, 7-day battery life, and water resistance.',
    specifications: {
      'Display': '1.4 inch AMOLED',
      'Battery': 'Up to 7 days',
      'Waterproof': '5ATM',
      'Sensors': 'HR, SpO2, Sleep',
    },
    rating: 4.9,
    reviewsCount: 540,
    seller: 'Gadget World',
    imageColor: 'bg-indigo-100',
    bids: [
      { user: 'User900', amount: 3120, time: '5s ago' },
      { user: 'User777', amount: 3050, time: '40s ago' },
    ],
  },
  {
    id: 5,
    name: 'Digital Air Fryer Pro 5L',
    category: 'Home Appliances',
    basePrice: 3999,
    currentBid: 4680,
    timeLeftSeconds: 75 * 60,
    image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&q=80',
      'https://images.unsplash.com/photo-1626143543166-51fbf04d4368?w=600&q=80',
    ],
    description: 'Cook healthier meals with 90% less oil. The Air Fryer Pro features 8 presets, a digital touch screen, and a non-stick basket.',
    specifications: {
      'Capacity': '5 Liters',
      'Power': '1500W',
      'Control': 'Digital Touch',
      'Presets': '8 Functions',
    },
    rating: 4.7,
    reviewsCount: 315,
    seller: 'Home Essentials',
    imageColor: 'bg-emerald-100',
    bids: [
      { user: 'User888', amount: 4680, time: '1m ago' },
      { user: 'User432', amount: 4550, time: '3m ago' },
    ],
  },
  {
    id: 6,
    name: 'Smartphone Z - 256GB',
    category: 'Mobile',
    basePrice: 45000,
    currentBid: 48500,
    timeLeftSeconds: 12 * 60 * 60,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff23?w=600&q=80'
    ],
    description: 'Flagship performance with the Smartphone Z. Features a stunning OLED display, pro-grade camera system, and all-day battery life.',
    specifications: {
      'Storage': '256GB',
      'RAM': '12GB',
      'Screen': '6.7 inch OLED',
      'Battery': '5000mAh'
    },
    rating: 4.8,
    reviewsCount: 420,
    seller: 'Tech Giant',
    imageColor: 'bg-slate-100',
    bids: [
      { user: 'User333', amount: 48500, time: '20m ago' }
    ]
  },
  {
    id: 7,
    name: 'UltraBook Pro 14',
    category: 'Laptop',
    basePrice: 85000,
    currentBid: 92000,
    timeLeftSeconds: 3 * 60 * 60,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
      'https://images.unsplash.com/photo-1531297461136-82lw85807168?w=600&q=80'
    ],
    description: 'The ultimate productivity machine. Ultra-lightweight design meets powerful performance with the latest M-series chip.',
    specifications: {
      'Processor': 'M2 Pro',
      'RAM': '16GB',
      'Storage': '512GB SSD',
      'Weight': '1.2 kg'
    },
    rating: 4.9,
    reviewsCount: 215,
    seller: 'Laptop World',
    imageColor: 'bg-gray-100',
    bids: [
      { user: 'User999', amount: 92000, time: '1h ago' }
    ]
  },
  {
    id: 8,
    name: 'Pro Running Sneakers',
    category: 'Shoes',
    basePrice: 3500,
    currentBid: 4200,
    timeLeftSeconds: 24 * 60 * 60,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80'
    ],
    description: 'Run faster and further with Pro Running Sneakers. Engineered for maximum energy return and cushioning.',
    specifications: {
      'Size': 'UK 9',
      'Material': 'Mesh',
      'Sole': 'Rubber',
      'Type': 'Running'
    },
    rating: 4.6,
    reviewsCount: 180,
    seller: 'Sporty Inc',
    imageColor: 'bg-red-50',
    bids: [
      { user: 'UserRun', amount: 4200, time: '3h ago' }
    ]
  },
  {
    id: 9,
    name: 'DSLR Camera Kit',
    category: 'Camera',
    basePrice: 45000,
    currentBid: 51200,
    timeLeftSeconds: 6 * 60 * 60,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80'
    ],
    description: 'Capture life in stunning detail with this professional DSLR kit. Includes 18-55mm lens and carrying bag.',
    specifications: {
      'Sensor': 'APS-C',
      'Megapixels': '24.2 MP',
      'Video': '4K 30fps',
      'Connectivity': 'Wi-Fi/NFC'
    },
    rating: 4.7,
    reviewsCount: 310,
    seller: 'Camera House',
    imageColor: 'bg-zinc-100',
    bids: [
      { user: 'UserCam', amount: 51200, time: '30m ago' }
    ]
  },
  {
    id: 10,
    name: 'Gaming Console 5',
    category: 'Gaming',
    basePrice: 49990,
    currentBid: 55000,
    timeLeftSeconds: 1 * 60 * 60,
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=600&q=80',
      'https://images.unsplash.com/photo-1592840496011-b80d568336db?w=600&q=80'
    ],
    description: 'Next-gen gaming is here. Experience lightning-fast loading, haptic feedback, and ray tracing graphics.',
    specifications: {
      'Storage': '825GB SSD',
      'Resolution': '8K Output',
      'Frame Rate': 'Up to 120fps',
      'Controller': 'Wireless Haptic'
    },
    rating: 4.9,
    reviewsCount: 850,
    seller: 'Gamer Zone',
    imageColor: 'bg-blue-50',
    bids: [
      { user: 'UserPlay', amount: 55000, time: '2m ago' }
    ]
  }
]

