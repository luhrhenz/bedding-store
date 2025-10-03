export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  color: string;
  rating: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Luxury Egyptian Cotton Sheet Set',
    description: 'Premium 1000 thread count Egyptian cotton sheets for ultimate comfort.',
    price: 60000.00,
    category: 'sheets',
    color: 'Gold',
    rating: 4.8,
    image: '/images/products/sheet-white-1.jpg'
  },
  {
    id: 2,
    name: 'Simple Duvet- Complete Set',
    description: 'Soft, lightweight duvet set crafted for everyday comfort and easy care.',
    price: 49000.99,
    category: 'duvets',
    color: 'blue',
    rating: 4.6,
    image: '/images/products/pillowcase-ivory-1.jpg'
  },
  {
    id: 3,
    name: 'Weighted Blanket - Queen Size',
    description: '15lb weighted blanket for improved sleep and reduced anxiety.',
    price: 49999.99,
    category: 'blankets',
    color: 'white',
    rating: 4.7,
    image: '/images/products/blanket-gray-1.jpg'
  },
  {
    id: 4,
    name: 'Organic cotton duvet',
    description: 'GOTS certified organic cotton duvet cover with button closure.',
    price: 40000.98,
    category: 'sheets',
    color: 'black',
    rating: 4.9,
    image: '/images/products/sheet-blue-1.jpg'
  },
  {
    id: 5,
    name: 'American Duvet- L',
    description: 'Ergonomic duvet designed for comfort and support.',
    price: 50000.99,
    category: 'duvets',
    color: 'gray',
    rating: 4.5,
    image: '/images/products/pillow-white-1.jpg'
  },
  {
    id: 6,
    name: 'Bamboo Sheet Set - King Size',
    description: 'Eco-friendly bamboo sheets with temperature regulating properties.',
    price: 75000.99,
    category: 'duvets',
    color: 'milk',
    rating: 4.7,
    image: '/images/products/duvet-beige-1.jpg'
  },
  {
    id: 7,
    name: 'Flannel Sheet Set - Twin XL',
    description: 'Cozy flannel sheets perfect for cold winter nights.',
    price: 69999.99,
    category: 'sheets',
    color: 'blue',
    rating: 4.4,
    image: '/images/products/sheet-red-1.jpg'
  },
  {
    id: 8,
    name: 'Down Alternative Comforter',
    description: 'Hypoallergenic down alternative comforter with premium fill.',
    price: 50000.99,
    category: 'comforters',
    color: 'white',
    rating: 4.6,
    image: '/images/products/comforter-white-1.jpg'
  }
];

export const formatPrice = (price: number): string => {
  return '₦' + price.toFixed(2);
};