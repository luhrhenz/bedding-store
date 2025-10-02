import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HeaderContainer = styled.header`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: blue;
  font-family: cursive;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #666;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }

  @media (max-width: 768px) {
    gap: 1.5rem;

    a {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const MobileDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 1rem;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  margin-top: 0.5rem;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  min-width: 150px;

  @media (min-width: 601px) {
    display: none;
  }

  a {
    display: block;
    text-decoration: none;
    color: #666;
    font-weight: 500;
    padding: 0.5rem 0;
    transition: color 0.3s;
    border-bottom: 1px solid #f0f0f0;

    &:hover {
      color: #007bff;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
  max-width: 400px;
  margin: 0 2rem;

  @media (max-width: 768px) {
    max-width: 250px;
    margin: 0 1rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: 3rem;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const SearchIcon = styled.svg`
  position: absolute;
  right: 1rem;
  width: 1.25rem;
  height: 1.25rem;
  color: #999;
  cursor: pointer;
`;

const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  position: relative;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #007bff;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const SearchModal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  margin-top: 0.5rem;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  @media (min-width: 601px) {
    display: none;
  }
`;

const SearchModalInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const Header = ({ cartItemCount, onCartClick, onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleSearchButtonClick = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  const handleModalSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleModalClose = () => {
    setIsSearchModalOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  // Close modals when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchModalOpen && !event.target.closest('.search-modal') && !event.target.closest('.search-button')) {
        setIsSearchModalOpen(false);
      }
      if (isMobileMenuOpen && !event.target.closest('.mobile-dropdown') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchModalOpen, isMobileMenuOpen]);

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>
          <Link to="/">MamaChisom Beddings Store.</Link>
        </Logo>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/#footer">About</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
        <MobileMenuButton className="mobile-menu-button" onClick={handleMobileMenuToggle} aria-label="Toggle mobile menu">
          ☰
        </MobileMenuButton>
        <MobileDropdown className="mobile-dropdown" isOpen={isMobileMenuOpen}>
          <Link to="/" onClick={handleMobileMenuClose}>Home</Link>
          <Link to="/#footer" onClick={handleMobileMenuClose}>About</Link>
          <Link to="/contact" onClick={handleMobileMenuClose}>Contact</Link>
        </MobileDropdown>
        <SearchWrapper>
          <SearchInput
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <SearchIcon viewBox="0 0 24 24">
            <path
              d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </SearchIcon>
        </SearchWrapper>
        <SearchButton className="search-button" onClick={handleSearchButtonClick} aria-label="Open search">
          🔍
        </SearchButton>
        <CartButton onClick={onCartClick} aria-label="Open cart">
          🛒
          {cartItemCount > 0 && (
            <CartCount>{cartItemCount}</CartCount>
          )}
        </CartButton>
        <SearchModal className="search-modal" isOpen={isSearchModalOpen}>
          <SearchModalInput
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleModalSearchChange}
            autoFocus
          />
        </SearchModal>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;