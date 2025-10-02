import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ScrollButton from './components/ScrollButton';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import HeroBanner from './components/HeroBanner';

// Hooks
import { useStore } from './hooks/useStore';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 2rem;
  }
`;

const HomePage = () => {
  const {
    products,
    cart,
    filters,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateFilter,
    cartTotals
  } = useStore();

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleContinueShopping = () => {
    setIsCartOpen(false);
  };

  return (
    <AppContainer>
      <Header
        cartItemCount={cartTotals.totalItems}
        onCartClick={handleCartClick}
        onSearchChange={(searchTerm) => updateFilter('search', searchTerm)}
      />

      <HeroBanner />

      <MainContent className="container">
        <Sidebar
          filters={filters}
          onFilterChange={updateFilter}
        />

        <ProductGrid
          products={products}
          onAddToCart={addToCart}
        />
      </MainContent>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        cartItems={cart}
        onClose={handleCloseCart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onContinueShopping={handleContinueShopping}
      />
    </AppContainer>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<HomePage />} />
        </Routes>
      </Router>
      <ScrollButton />
    </>
  );
};

export default App;