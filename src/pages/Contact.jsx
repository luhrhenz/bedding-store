import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: Arial, sans-serif;
`;

const ContactTitle = styled.h1`
  color: #333;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const ContactItem = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #007bff;

  strong {
    color: #333;
    display: inline-block;
    min-width: 80px;
  }
`;

const BackToHome = styled.p`
  margin-top: 3rem;
`;

const HomeLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactText>
        If you have any questions or need assistance, please reach out to us:
      </ContactText>

      <ContactList>
        <ContactItem>
          <strong>Email:</strong> jessicaahaneku@gmail.com
        </ContactItem>
        <ContactItem>
          <strong>Phone:</strong> +234 8023267900
        </ContactItem>
        <ContactItem>
          <strong>Address:</strong> NO.30 massallaci street, U/Maigero, kaduna , Nigeria.
        </ContactItem>
      </ContactList>

      <ContactText>
        We look forward to hearing from you!
      </ContactText>

      <BackToHome>
        <HomeLink href="/">← Back to Home</HomeLink>
      </BackToHome>
    </ContactContainer>
  );
};

export default Contact;