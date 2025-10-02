import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { products } from '../utils/productData';

const HeroContainer = styled.section`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 1rem;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-in-out;
  transform: ${props => props.isActive ? 'translateX(0)' : 'translateX(-100%)'};
  position: absolute;
  top: 0;
  left: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 123, 255, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProductInfo = styled.div`
  background: rgba(122, 122, 122, 0.42);
  color: #333;
  padding: 1rem 0.5rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  margin-top: 1rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: lightgrey;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProductPrice = styled.p`
  margin: 0.5rem 0 0 0;
  font-size: 1.3rem;
  font-weight: bold;
  color: #007bff;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ImageIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 3;
`;

const IndicatorDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.isActive ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const HeroBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500); // Half of transition time
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[currentImageIndex];

  const handleIndicatorClick = (index) => {
    if (index !== currentImageIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <HeroContainer>
      {products.map((product, index) => (
        <HeroImage
          key={product.id}
          image={product.image}
          isActive={index === currentImageIndex && !isTransitioning}
        />
      ))}

      <HeroOverlay>
        <HeroContent>
          <HeroTitle>MamaChisom Beddings Store</HeroTitle>
          <HeroSubtitle>Luxury bedding for the perfect night's sleep</HeroSubtitle>

          <ProductInfo>
            <ProductName>{currentProduct.name}</ProductName>
            <ProductPrice>₦{currentProduct.price.toLocaleString()}</ProductPrice>
          </ProductInfo>
        </HeroContent>
      </HeroOverlay>

      <ImageIndicator>
        {products.map((_, index) => (
          <IndicatorDot
            key={index}
            isActive={index === currentImageIndex}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </ImageIndicator>
    </HeroContainer>
  );
};

export default HeroBanner;