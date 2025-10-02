import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 250px;
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  height: fit-content;
  position: ${({ isActive }) => isActive ? 'sticky' : 'static'};
  top: ${({ isActive }) => isActive ? '120px' : 'auto'};
  transition: position 0.3s ease;

  &:hover {
    position: sticky;
    top: 120px;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ isVisible }) => isVisible ? '0' : '-280px'};
    width: 280px;
    height: 100vh;
    overflow-y: auto;
    z-index: 45;
    transition: left 0.3s ease;
    box-shadow: ${({ isVisible }) => isVisible ? '2px 0 10px rgba(0, 0, 0, 0.1)' : 'none'};
    padding-top: 120px; /* Account for header height */
    pointer-events: ${({ isVisible }) => isVisible ? 'auto' : 'none'};
  }
`;

const FilterGroup = styled.div`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 1rem;
    color: #333;
    font-size: 1.1rem;
  }
`;

const FilterOption = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;

  input[type="radio"] {
    margin-right: 0.5rem;
  }
`;

const PriceRange = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
`;

const PriceValues = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #666;
`;

const Sidebar = ({ filters, onFilterChange, isVisible = true }) => {
  const [isActive, setIsActive] = useState(false);

  const handleCategoryChange = (e) => {
    onFilterChange('category', e.target.value);
  };


  const handlePriceChange = (e) => {
    onFilterChange('maxPrice', parseInt(e.target.value, 10));
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setIsActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setIsActive(false);
    }
  };

  const handleTouchStart = () => {
    if (window.innerWidth <= 768) {
      setIsActive(true);
    }
  };

  const handleTouchEnd = () => {
    if (window.innerWidth <= 768) {
      setIsActive(false);
    }
  };

  return (
    <SidebarContainer
      aria-label="Filters"
      isActive={isActive}
      isVisible={isVisible}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <FilterGroup>
        <h3>Category</h3>
        <div>
          <FilterOption>
            <input
              type="radio"
              name="category"
              value="all"
              checked={filters.category === 'all'}
              onChange={handleCategoryChange}
            />
            All Categories
          </FilterOption>
          <FilterOption>
            <input
              type="radio"
              name="category"
              value="sheets"
              checked={filters.category === 'sheets'}
              onChange={handleCategoryChange}
            />
            Sheets
          </FilterOption>
          <FilterOption>
            <input
              type="radio"
              name="category"
              value="pillows"
              checked={filters.category === 'pillows'}
              onChange={handleCategoryChange}
            />
            Pillows
          </FilterOption>
          <FilterOption>
            <input
              type="radio"
              name="category"
              value="blankets"
              checked={filters.category === 'blankets'}
              onChange={handleCategoryChange}
            />
            Blankets
          </FilterOption>
          <FilterOption>
            <input
              type="radio"
              name="category"
              value="duvets"
              checked={filters.category === 'duvets'}
              onChange={handleCategoryChange}
            />
            Duvets
          </FilterOption>
          <FilterOption>
            <input
              type="radio"
              name="category"
              value="comforters"
              checked={filters.category === 'comforters'}
              onChange={handleCategoryChange}
            />
            Comforters
          </FilterOption>
        </div>
      </FilterGroup>


      <FilterGroup>
        <h3>Price Range</h3>
        <PriceRange
          type="range"
          min="0"
          max="100000"
          value={filters.maxPrice}
          onChange={handlePriceChange}
        />
        <PriceValues>
          <span>₦0</span>
          <span>₦{filters.maxPrice.toLocaleString()}</span>
        </PriceValues>
      </FilterGroup>
    </SidebarContainer>
  );
};

export default Sidebar;