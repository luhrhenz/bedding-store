import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowUp } from 'lucide-react'; // optional icon library

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1000;
  display: ${({ show }) => (show ? 'block' : 'none')};
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #0056b3;
    transform: translateY(-3px);
  }
`;

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // show after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll back to top
    });
  };

  return (
    <Button onClick={scrollToTop} show={showButton}>
      <ArrowUp size={20} /> {/* or just ↑ if you don’t want an icon */}
    </Button>
  );
};

export default ScrollButton;
