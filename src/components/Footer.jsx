import React, { useState } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #f8f9fa;
  margin-top: 4rem;
  padding: 3rem 0 1rem;
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  color: #333;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: #666;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

const Newsletter = styled.div``;

const NewsletterText = styled.i`
  color: #666;
  display: block;
  margin-bottom: 1rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const NewsletterButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  white-space: nowrap;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.875rem 1.5rem;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  border-top: 1px solid #dee2e6;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  bottom: 0;
  background: 'whitesmoke';
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #666;
  margin: 0;
`;

const MadeWith = styled.i`
  color: #666;
`;

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <FooterContainer id="footer">
      <FooterGrid>
        <FooterSection className="about">
          <FooterTitle>Mama Chisom Beddings Store</FooterTitle>
          <FooterText>Luxury bedding for the perfect night's sleep.</FooterText>
        </FooterSection>

        <FooterSection className="shop-list">
          <FooterTitle>Shop</FooterTitle>
          <FooterList>
            <a href="#sheets">Sheets</a>
            <a href="#pillows">Pillows</a>
            <a href="#blankets">Blankets</a>
            <a href="#duvets">Duvets</a>
          </FooterList>
        </FooterSection>

        <FooterSection className="cs">
          <FooterTitle>Customer Service</FooterTitle>
          <FooterList>
            <a href="/contact">Contact Us</a>
            <a href="#shipping">Shipping & Returns</a>
            <a href="#faq">FAQ</a>
            <a href="#care">Care Instructions</a>
          </FooterList>
        </FooterSection>

        <Newsletter className="newsletter">
          <FooterTitle>Stay Connected</FooterTitle>
          <NewsletterText>Subscribe to our newsletter for updates</NewsletterText>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput
              type="email"
              placeholder="your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <NewsletterButton type="submit">Subscribe</NewsletterButton>
          </NewsletterForm>
        </Newsletter>
      </FooterGrid>

      <FooterBottom>
        <Copyright>&copy; 2025 MamaChisom Beddings Store. All rights reserved.</Copyright>
        <MadeWith>Developed by luhrehnz</MadeWith>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;