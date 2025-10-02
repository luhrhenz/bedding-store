# 🖼️ Adding Client Product Images

Your React bedding store is now set up to use local images instead of external URLs. Here's how to add your client's product photos:

## 📁 Image Folder Structure

```
bedding-store-react/
├── public/
│   └── images/
│       └── products/
│           ├── sheet-white-1.jpg
│           ├── pillowcase-ivory-1.jpg
│           ├── blanket-gray-1.jpg
│           ├── sheet-blue-1.jpg
│           ├── pillow-white-1.jpg
│           ├── duvet-beige-1.jpg
│           ├── sheet-red-1.jpg
│           └── comforter-white-1.jpg
```

## 🖼️ How to Add Your Client's Images

### Step 1: Get Images from Client
- Ask your client for their bedsheets photos
- Request high-quality images (at least 800x800px)
- Get separate images for each product type

### Step 2: Organize Images
1. **Create the folder:** `bedding-store-react/public/images/products/`
2. **Name files** using this pattern:
   - `sheet-white-1.jpg` (category-color-number.jpg)
   - `pillowcase-ivory-1.jpg`
   - `blanket-gray-1.jpg`

### Step 3: Image Requirements
- **Format:** JPG, PNG, or WebP
- **Size:** At least 800x800px for good quality
- **File size:** Under 500KB each for fast loading
- **Naming:** Use descriptive names (no spaces, use hyphens)

## 📋 Current Product Image Mapping

| Product | Image File | Status |
|---------|------------|---------|
| Luxury Egyptian Cotton Sheet Set | `sheet-white-1.jpg` | ⏳ Needs client image |
| Silk Pillowcase Duo | `pillowcase-ivory-1.jpg` | ⏳ Needs client image |
| Weighted Blanket | `blanket-gray-1.jpg` | ⏳ Needs client image |
| Bamboo Sheet Set | `sheet-blue-1.jpg` | ⏳ Needs client image |
| Memory Foam Pillow | `pillow-white-1.jpg` | ⏳ Needs client image |
| Organic Cotton Duvet | `duvet-beige-1.jpg` | ⏳ Needs client image |
| Flannel Sheet Set | `sheet-red-1.jpg` | ⏳ Needs client image |
| Down Alternative Comforter | `comforter-white-1.jpg` | ⏳ Needs client image |

## 🚀 Quick Setup

1. **Copy your client's images** to `public/images/products/`
2. **Rename them** to match the filenames above
3. **Refresh the website** - images will appear automatically!

## 🔧 Image Optimization Tips

- **Resize large images** to 800x800px before uploading
- **Compress images** to reduce file size
- **Use consistent lighting** in all photos
- **Show products clearly** without too much background

## 📱 Fallback System

If an image is missing, the site will show a placeholder or broken image icon. Make sure all 8 product images are added for the best user experience.

---

**🎯 Next Steps:**
1. Get images from your client
2. Add them to `public/images/products/`
3. Name them exactly as shown above
4. Your site will display the client's actual products!

**Your React store is ready for your client's beautiful bedsheets photos!** 🛏️✨