import React, { useState } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';


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
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: blue;
  font-family: poppins, cursive;

  a {
    text-decoration: none;
    color: inherit;
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
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
  max-width: 400px;
  margin: 0 2rem;
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

const Header = ({ cartItemCount, onCartClick, onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>
          <a href="/">MamaChisom Beddings Store.</a>
        </Logo>
        <Nav>
          <a href="/">Home</a>
          <a href="/#footer">About</a>
          <a href="/contact">Contact</a>
        </Nav>
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
        <CartButton onClick={onCartClick} aria-label="Open cart">
          🛒
          {cartItemCount > 0 && (
            <CartCount>{cartItemCount}</CartCount>
          )}
        </CartButton>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;