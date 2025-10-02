import { useState, useMemo } from 'react';
import { products } from '../utils/productData';

export const useStore = () => {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    color: 'all',
    maxPrice: 100000,
    search: ''
  });

  // Filter products based on current filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchCategory = filters.category === 'all' || product.category === filters.category;
      const matchColor = filters.color === 'all' || product.color === filters.color;
      const matchPrice = product.price <= filters.maxPrice;
      const searchLower = filters.search.toLowerCase();
      const matchSearch = product.name.toLowerCase().includes(searchLower) ||
                         product.description.toLowerCase().includes(searchLower);

      return matchCategory && matchColor && matchPrice && matchSearch;
    });
  }, [filters]);

  // Calculate cart totals
  const cartTotals = useMemo(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return { totalItems, subtotal };
  }, [cart]);

  // Cart functions
  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === productId);
      if (existing) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQty) => {
    if (newQty < 1) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  // Filter functions
  const updateFilter = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  return {
    // Data
    products: filteredProducts,
    cart,
    filters,

    // Cart functions
    addToCart,
    removeFromCart,
    updateQuantity,

    // Filter functions
    updateFilter,

    // Computed values
    cartTotals
  };
};