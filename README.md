# 🛏️ Mama Chisom Beddings Store

A modern React e-commerce application for bedding products with email order notifications.

## ✨ Features

- **🛒 Shopping Cart** - Add, remove, and manage products
- **🔍 Product Filtering** - Filter by category, color, and price range
- **📧 Email Checkout** - Send orders directly to your email
- **📱 Responsive Design** - Works on desktop and mobile
- **🎨 Modern UI** - Built with React and styled-components
- **🛣️ React Router** - Client-side navigation

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd bedding-store-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your EmailJS credentials (get from [emailjs.com](https://emailjs.com))

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173/`

## 📧 Email Setup

This app includes email checkout functionality using EmailJS. To receive order notifications:

1. **Create EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Set up email service** (Gmail, Outlook, etc.)
3. **Create email template** with these variables:
   - `{{from_name}}` - Customer name
   - `{{from_email}}` - Customer email
   - `{{phone}}` - Customer phone
   - `{{order_items}}` - List of ordered items
   - `{{item_count}}` - Total items
   - `{{order_total}}` - Total price
   - `{{message}}` - Customer message

4. **Add credentials to `.env`**:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_STORE_EMAIL=your-email@example.com
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Site header with navigation
│   ├── Sidebar.jsx     # Product filters
│   ├── ProductGrid.jsx # Product display grid
│   ├── Cart.jsx        # Shopping cart sidebar
│   └── Footer.jsx      # Site footer
├── pages/              # Page components
│   └── Contact.jsx     # Contact page
├── hooks/              # Custom React hooks
│   └── useStore.js     # State management hook
├── utils/              # Utility functions
│   ├── productData.ts  # Product information
│   ├── emailService.js # Email sending functionality
│   └── emailConfig.js  # EmailJS configuration
└── App.jsx             # Main application component
```

## 🔒 Security Features

- **Environment variables** for sensitive data
- **Git-ignored credentials** - Safe for GitHub
- **No hardcoded secrets** in source code
- **Input validation** on forms

## 🎯 Usage

1. **Browse Products** - View all bedding products on the homepage
2. **Filter Products** - Use sidebar filters to narrow down selection
3. **Search** - Use the search bar to find specific products
4. **Add to Cart** - Click "Add to Cart" on any product
5. **Checkout** - Fill customer info and click "Send Order via Email"
6. **Receive Email** - You'll get an email with complete order details

## 🛡️ Production Deployment

Before deploying to production:

1. **Set environment variables** in your hosting platform
2. **Use production EmailJS credentials**
3. **Test email functionality** thoroughly
4. **Configure your domain** for EmailJS (if needed)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Made with ❤️ using React, Vite, and modern web technologies**