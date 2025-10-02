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
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: ${({ showSidebar }) => showSidebar ? '250px 1fr' : '1fr'};
    padding: 1rem;
    gap: 2rem;
  }
`;

const SidebarToggleButton = styled.button`
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 123, 255, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 50;
  display: none;
  font-size: 1.2rem;

  &:hover {
    background: rgba(0, 123, 255, 1);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1rem;
    right: 0.75rem;
  }
`;

const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 40;
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};

  @media (min-width: 769px) {
    display: none;
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleContinueShopping = () => {
    setIsCartOpen(false);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContainer>
      <Header
        cartItemCount={cartTotals.totalItems}
        onCartClick={handleCartClick}
        onSearchChange={(searchTerm) => updateFilter('search', searchTerm)}
      />

      <HeroBanner />

      <MainContent className="container" showSidebar={isSidebarOpen}>
        <Sidebar
          filters={filters}
          onFilterChange={updateFilter}
          isVisible={isSidebarOpen}
        />

        <ProductGrid
          products={products}
          onAddToCart={addToCart}
        />
      </MainContent>

      <SidebarToggleButton onClick={handleSidebarToggle}>
        {isSidebarOpen ? '→' : '←'}
      </SidebarToggleButton>

      <SidebarOverlay
        isVisible={isSidebarOpen}
        onClick={() => setIsSidebarOpen(false)}
      />

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