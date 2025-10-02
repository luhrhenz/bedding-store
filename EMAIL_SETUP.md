# 📧 Email Checkout Setup Guide

Your React bedding store now has email checkout functionality! When customers click "Send Order via Email", it will send you an email with their order details.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free" and create your account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, click "Add New Service"
2. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
3. Follow the setup instructions for your email provider

### Step 3: Create Email Template
1. In EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Design your email template with these variables:
   ```
   Customer: {{from_name}} ({{from_email}})
   Phone: {{phone}}
   Items: {{order_items}}
   Total Items: {{item_count}}
   Total Price: {{order_total}}
   Message: {{message}}
   ```

### Step 4: Get Your Credentials
From your EmailJS dashboard:
- **Service ID**: Found in "Account" → "API Keys"
- **Template ID**: Found in your template settings
- **Public Key**: Found in "Account" → "API Keys"

### Step 5: Set Environment Variables
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and replace with your actual credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   VITE_STORE_EMAIL=jessicaahaneku@gmail.com
   ```

## ✅ Test Your Setup

1. **Start your React app**: `npm run dev`
2. **Add items to cart** on your website
3. **Click the cart icon** (🛒) to open cart
4. **Fill in customer information**
5. **Click "Send Order via Email"**
6. **Check your email** for the order notification!

## 🎯 What You'll Receive

When a customer places an order, you'll get an email with:
- Customer's name and contact information
- Complete list of ordered items with quantities
- Total price and item count
- Any special instructions or messages

## 🔧 Troubleshooting

**Email not sending?**
- Check that your email service is connected in EmailJS
- Verify your credentials in `emailConfig.js`
- Check browser console for error messages

**Need help?**
- EmailJS has great documentation at [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Free tier allows 200 emails per month

---

## 🔒 Security & GitHub Safety

Your sensitive credentials are now protected with environment variables:

- ✅ **`.env` files are gitignored** - Won't be pushed to GitHub
- ✅ **Credentials loaded securely** - Using Vite's environment variable system
- ✅ **No hardcoded secrets** - All sensitive data is externalized

### Before Pushing to GitHub:
1. Ensure `.env` is NOT committed (it's already in `.gitignore`)
2. Only commit `.env.example` (template file)
3. Set up your actual credentials locally in your `.env` file

### For Production Deployment:
- Set environment variables in your hosting platform
- Never commit real credentials to version control
- Use different credentials for production vs development

---

🎉 **Your e-commerce store now has professional order notifications!**