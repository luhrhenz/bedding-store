// EmailJS Configuration
// Uses environment variables for security

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

// Store email (where order notifications are sent)
export const STORE_EMAIL = import.meta.env.VITE_STORE_EMAIL || 'jessicaahaneku@gmail.com';

// Instructions for setting up EmailJS:
/*
1. Copy .env.example to .env
2. Replace the placeholder values with your actual EmailJS credentials
3. Get credentials from: https://www.emailjs.com/

Required Environment Variables:
- VITE_EMAILJS_SERVICE_ID: Your EmailJS service ID
- VITE_EMAILJS_TEMPLATE_ID: Your email template ID
- VITE_EMAILJS_PUBLIC_KEY: Your EmailJS public key
- VITE_STORE_EMAIL: Where order emails should be sent (your email)
*/