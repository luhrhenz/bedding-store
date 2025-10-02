import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/productData';

const ProductsSection = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 0;
  align-items: start;
  width: 100%;
  min-width: 0; /* Prevent grid overflow */

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem 0;
  }
`;

const ProductCard = styled.article`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 450px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 350px;
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 0.9rem;
  border: 1px solid #e9ecef;
`;

const ProductContent = styled.div`
  padding: 1.5rem;
  flex: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const ProductCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #666;
`;

const Star = styled.span`
  color: #ffd700;
  margin-right: 0.25rem;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }
`;

const ProductPrice = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: #007bff;
`;

const AddToCartBtn = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
    width: 100%;
  }
`;

const EmptyState = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  color: #6b7280;
  font-size: 1.1rem;
  padding: 3rem;
`;

const ProductGrid = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return (
      <ProductsSection>
        <EmptyState>
          No products match your filters. Try adjusting your search criteria.
        </EmptyState>
      </ProductsSection>
    );
  }

  return (
    <ProductsSection>
      {products.map((product) => (
        <ProductCard key={product.id} aria-label={`${product.name}, ${product.category}, ${formatPrice(product.price)}`}>
          <ProductImageContainer>
            <ProductImage src={product.image} alt={product.name} onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }} />
            <ImagePlaceholder style={{ display: 'none' }}>
              🛏️ {product.name}
            </ImagePlaceholder>
          </ProductImageContainer>
          <ProductContent>
            <ProductCategory>
              <span>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
              <span>
                <Star title={`Rating: ${product.rating}`}>★</Star>
                {product.rating.toFixed(1)}
              </span>
            </ProductCategory>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductFooter>
              <ProductPrice>{formatPrice(product.price)}</ProductPrice>
              <AddToCartBtn
                onClick={() => onAddToCart(product.id)}
                aria-label={`Add ${product.name} to cart`}
              >
                Add to Cart
              </AddToCartBtn>
            </ProductFooter>
          </ProductContent>
        </ProductCard>
      ))}
    </ProductsSection>
  );
};

export default ProductGrid;