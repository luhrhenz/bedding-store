import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, STORE_EMAIL } from './emailConfig';

// Initialize EmailJS with your public key
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export const sendOrderEmail = async (cartItems, customerInfo = {}) => {
  try {
    // Calculate order summary
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // Create order details for email
    const orderDetails = cartItems.map(item =>
      `${item.name} - ${item.color} - Quantity: ${item.quantity} - ₦${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');

    // Email template parameters - must match your EmailJS template variables exactly
    const templateParams = {
      to_email: STORE_EMAIL,
      name: customerInfo.name || 'Bedding Store Customer',      // Changed from 'from_name'
      email: customerInfo.email || 'customer@example.com',       // Changed from 'from_email'
      title: 'New Order from Bedding Store',                     // Added for 'title' variable
      phone: customerInfo.phone || 'Not provided',
      order_items: orderDetails,
      item_count: itemCount.toString(),
      order_total: `₦${subtotal.toLocaleString()}`,
      message: customerInfo.message || 'No additional message'
    };

    // Debug: Log what we're sending
    console.log('=== EMAILJS DEBUG INFO ===');
    console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
    console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
    console.log('Template params:', templateParams);
    console.log('=======================');

    // Debug logging
    console.log('EmailJS Config:', {
      serviceId: EMAILJS_CONFIG.SERVICE_ID,
      templateId: EMAILJS_CONFIG.TEMPLATE_ID,
      publicKey: EMAILJS_CONFIG.PUBLIC_KEY ? 'Set' : 'Missing'
    });
    console.log('Template params:', templateParams);

    // Send email using EmailJS
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log('EmailJS result:', result);
    return { success: true, messageId: result.text };
  } catch (error) {
    console.error('Email sending failed:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.status,
      text: error.text
    });
    return {
      success: false,
      error: `Email failed: ${error.message} (Status: ${error.status || 'Unknown'})`
    };
  }
};

export const initializeEmailJS = (publicKey) => {
  emailjs.init(publicKey);
};