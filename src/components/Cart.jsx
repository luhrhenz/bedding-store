import React, { useState } from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/productData';
import { sendOrderEmail } from '../utils/emailService';

const CartOverlay = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  align-items: center;
  justify-content: flex-end;
`;

const CartSidebar = styled.aside`
  background: white;
  width: 400px;
  height: 100%;
  padding: 2rem;
  overflow-y: auto;
  box-shadow: -4px 0 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CartHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
`;

const CartTitle = styled.h2`
  margin: 0;
  color: #333;
`;

const CloseCartBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #333;
  }
`;

const CartItems = styled.div`
  margin-bottom: 2rem;
`;

const CartEmpty = styled.p`
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 2rem 0;
`;

const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const CartItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
`;

const CartItemInfo = styled.div`
  flex: 1;
`;

const CartItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 0.5rem;
`;

const CartItemName = styled.span`
  font-weight: 500;
  color: #333;
`;

const CartItemPrice = styled.span`
  font-weight: bold;
  color: #007bff;
`;

const CartItemColor = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const CartItemControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QtyButton = styled.button`
  background: #f8f9fa;
  border: 1px solid #ddd;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #e9ecef;
  }
`;

const QtyValue = styled.span`
  min-width: 30px;
  text-align: center;
`;

const RemoveBtn = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #c82333;
  }
`;

const CartFooter = styled.footer`
  border-top: 1px solid #eee;
  padding-top: 1rem;
`;

const CartSubtotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

const CheckoutBtn = styled.button`
  width: 100%;
  background: #28a745;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background: #218838;
  }
`;

const ContinueShopping = styled.div`
  text-align: center;
`;

const ContinueShoppingBtn = styled.button`
  background: none;
  border: 1px solid #007bff;
  color: #007bff;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #007bff;
    color: white;
  }
`;

// Customer Information Form
const CustomerForm = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const FormTitle = styled.h3`
  margin-bottom: 1rem;
  color: #333;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Message = styled.div`
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-weight: 500;

  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Cart = ({
  isOpen,
  cartItems,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onContinueShopping
}) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Customer form state
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Email sending state
  const [emailStatus, setEmailStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;

    setEmailStatus({ loading: true, success: false, error: null });

    try {
      const result = await sendOrderEmail(cartItems, customerInfo);

      if (result.success) {
        setEmailStatus({ loading: false, success: true, error: null });
        // Clear cart after successful order
        setTimeout(() => {
          onClose();
          setCustomerInfo({ name: '', email: '', phone: '', message: '' });
          setEmailStatus({ loading: false, success: false, error: null });
        }, 3000);
      } else {
        setEmailStatus({ loading: false, success: false, error: result.error });
      }
    } catch (error) {
      setEmailStatus({ loading: false, success: false, error: 'Failed to send email. Please try again.' });
    }
  };

  return (
    <CartOverlay isOpen={isOpen} aria-hidden={!isOpen}>
      <CartSidebar role="dialog" aria-modal={isOpen} aria-labelledby="cartTitle">
        <CartHeader>
          <CartTitle id="cartTitle">Shopping Cart</CartTitle>
          <CloseCartBtn onClick={onClose} aria-label="Close cart">×</CloseCartBtn>
        </CartHeader>

        <CartItems id="cartItems">
          {cartItems.length === 0 ? (
            <CartEmpty>Your cart is empty</CartEmpty>
          ) : (
            cartItems.map((item) => (
              <CartItem key={item.id} data-id={item.id}>
                <CartItemImage src={item.image} alt={item.name} />
                <CartItemInfo>
                  <CartItemHeader>
                    <CartItemName>{item.name}</CartItemName>
                    <CartItemPrice>{formatPrice(item.price * item.quantity)}</CartItemPrice>
                  </CartItemHeader>
                  <CartItemColor>{item.color}</CartItemColor>
                  <CartItemControls>
                    <QuantityControls aria-label={`Quantity controls for ${item.name}`}>
                      <QtyButton
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </QtyButton>
                      <QtyValue>{item.quantity}</QtyValue>
                      <QtyButton
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </QtyButton>
                    </QuantityControls>
                    <RemoveBtn
                      onClick={() => onRemoveItem(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      Remove
                    </RemoveBtn>
                  </CartItemControls>
                </CartItemInfo>
              </CartItem>
            ))
          )}
        </CartItems>

        {cartItems.length > 0 && (
          <>
            <CustomerForm>
              <FormTitle>Customer Information</FormTitle>

              {emailStatus.success && (
                <Message className="success">
                  ✅ Order sent successfully! We'll contact you soon.
                </Message>
              )}

              {emailStatus.error && (
                <Message className="error">
                  ❌ {emailStatus.error}
                </Message>
              )}

              <FormGrid>
                <FormGroup>
                  <Label htmlFor="customerName">Full Name *</Label>
                  <Input
                    type="text"
                    id="customerName"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="customerEmail">Email Address *</Label>
                  <Input
                    type="email"
                    id="customerEmail"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </FormGroup>
              </FormGrid>

              <FormGrid>
                <FormGroup>
                  <Label htmlFor="customerPhone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="customerPhone"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    placeholder="+234 802 326 7900"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="customerMessage">Additional Message</Label>
                  <TextArea
                    id="customerMessage"
                    name="message"
                    value={customerInfo.message}
                    onChange={handleInputChange}
                    placeholder="Any special instructions or delivery preferences..."
                  />
                </FormGroup>
              </FormGrid>
            </CustomerForm>

            <CartFooter>
              <CartSubtotal>
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </CartSubtotal>
              <CheckoutBtn
                onClick={handleCheckout}
                disabled={emailStatus.loading || !customerInfo.name || !customerInfo.email}
              >
                {emailStatus.loading && <LoadingSpinner />}
                {emailStatus.loading ? 'Sending Order...' : 'Send Order via Email'}
              </CheckoutBtn>
              <ContinueShopping>
                <ContinueShoppingBtn onClick={onContinueShopping}>
                  Continue Shopping
                </ContinueShoppingBtn>
              </ContinueShopping>
            </CartFooter>
          </>
        )}
      </CartSidebar>
    </CartOverlay>
  );
};

export default Cart;