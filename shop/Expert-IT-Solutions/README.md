# Expert IT Solutions - Website Template

## 📁 Folder Structure

```
expert-it-solutions/
│
├── index.html          # Home page with services, features, and testimonials
├── about.html          # About page with company history and values
├── contact.html        # Contact page with form, map, and contact info
├── style.css           # All styles - modern, mobile-first design
├── script.js           # JavaScript for animations and interactivity
├── images/             # Folder for all images
│   ├── logo.png        # Shop logo (recommended: 200x60px)
│   ├── about-shop.jpg  # Shop photo for About page
│   ├── team.jpg        # Team photo for About page
│   └── (other images)
│
└── README.md          # This file
```

---

## 🎯 Features

✅ **Modern, Mobile-First Design**
- Beautiful gradient colors and animations
- Fully responsive on all devices
- Fast loading on low-end phones

✅ **Prominent CTA Buttons**
- Floating Call & WhatsApp buttons
- Click-to-call functionality
- Direct WhatsApp integration

✅ **Professional Sections**
- Hero section with animated banner
- Services showcase with icons
- Customer testimonials
- Trust-building features
- Google Maps integration
- Contact form

✅ **Easy Customization**
- Change text and images only
- No coding required for basic changes
- CSS variables for colors
- Reusable for multiple shops

---

## 🔧 How to Customize for Different Shops

### Step 1: Create Shop Folder
```
/amit-pan-shop/
/mobile-shop-bhandup/
/medical-store-vikhroli/
```

### Step 2: Copy All Files
Copy all files from `expert-it-solutions` to your new shop folder.

### Step 3: Update Contact Information

**In ALL HTML files (index.html, about.html, contact.html):**

1. **Phone Numbers** - Replace these everywhere:
   ```html
   +919876543210  →  Your actual number
   tel:+919876543210  →  tel:+91XXXXXXXXXX
   https://wa.me/919876543210  →  https://wa.me/91XXXXXXXXXX
   ```

2. **Shop Name** - Replace:
   ```html
   Expert IT Solutions  →  Your Shop Name
   ```

3. **Location** - Replace:
   ```html
   Bhandup West, Mumbai  →  Your Area, Mumbai
   ```

4. **Email** - Replace:
   ```html
   info@expertitsolutions.com  →  your-email@example.com
   ```

### Step 4: Update Services (index.html)

**Find the Services Section:**

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-laptop"></i>  <!-- Change icon -->
    </div>
    <h3>Laptop Repair</h3>  <!-- Change service name -->
    <p>Expert repair...</p>  <!-- Change description -->
</div>
```

**Icon Options** (Font Awesome):
- Pan Shop: `fa-utensils`, `fa-store`
- Mobile Shop: `fa-mobile-alt`, `fa-phone`
- Medical Store: `fa-pills`, `fa-hospital`
- Tailoring: `fa-cut`, `fa-tshirt`
- Stationery: `fa-pen`, `fa-book`

### Step 5: Update Images

**Required Images:**

1. **Logo** (`images/logo.png`)
   - Size: 200x60px or similar
   - Format: PNG with transparent background
   - If no logo, fallback SVG will show

2. **Shop Photo** (`images/about-shop.jpg`)
   - Size: 500x400px
   - Format: JPG
   - Your shop exterior/interior

3. **Team Photo** (`images/team.jpg`)
   - Size: 500x400px
   - Format: JPG
   - Shop owner or team

### Step 6: Customize Colors (style.css)

**Change Primary Color:**

```css
:root {
    --primary-color: #4CAF50;  /* Change to your brand color */
    --secondary-color: #2196F3;
    --accent-color: #FF9800;
}
```

**Color Suggestions:**
- Pan Shop: `#FF5722` (Red/Orange)
- Mobile Shop: `#2196F3` (Blue)
- Medical Store: `#4CAF50` (Green)
- Tailoring: `#9C27B0` (Purple)

### Step 7: Update About Page (about.html)

1. **Company Introduction:**
   ```html
   <p>Welcome to Expert IT Solutions...</p>
   ```
   Replace with your shop's story.

2. **Years of Experience:**
   ```html
   <h3>15+ Years</h3>
   ```
   Update with actual years.

3. **Statistics:**
   ```html
   <h3>5000+</h3>
   <p>Happy Customers</p>
   ```
   Update with real numbers.

4. **Milestones:**
   ```html
   <div class="milestone-year">2010</div>
   <div class="milestone-desc">Started...</div>
   ```
   Update with your timeline.

### Step 8: Update Contact Page (contact.html)

1. **Address:**
   ```html
   <p>Expert IT Solutions<br>
      Shop No. 12, Ground Floor<br>
      LBS Marg, Near Railway Station<br>
      Bhandup West, Mumbai - 400078</p>
   ```

2. **Business Hours:**
   ```html
   <p><strong>Monday - Saturday:</strong> 10:00 AM - 8:00 PM<br>
      <strong>Sunday:</strong> Closed</p>
   ```

3. **Google Maps:**
   - Get your shop's Google Maps embed code
   - Replace the iframe src:
   ```html
   <iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"></iframe>
   ```

4. **Google Form (Optional):**
   - Create a Google Form
   - Get the embed code
   - Replace the iframe src

### Step 9: Update Testimonials (index.html)

```html
<div class="testimonial-card">
    <p class="testimonial-text">"Great service!"</p>
    <div class="testimonial-author">
        <strong>Customer Name</strong>
        <span>Area Name</span>
    </div>
</div>
```

Use real customer reviews if available.

---

## 📱 Testing Checklist

- [ ] All phone numbers work correctly
- [ ] WhatsApp links open properly
- [ ] All images load correctly
- [ ] Mobile menu works
- [ ] Contact form submits
- [ ] Google Maps loads
- [ ] All links work
- [ ] Test on mobile phone
- [ ] Test on tablet
- [ ] Test on desktop

---

## 🚀 Deployment Options

### Option 1: Free Hosting (Recommended for Starting)
1. **GitHub Pages** (Free)
   - Create GitHub account
   - Upload folder to repository
   - Enable GitHub Pages
   - Access via: `username.github.io/shop-name`

2. **Netlify** (Free)
   - Drag and drop folder
   - Get free URL: `shop-name.netlify.app`

3. **Vercel** (Free)
   - Connect GitHub repository
   - Auto-deploy on changes

### Option 2: Custom Domain (₹200-500/year)
1. Buy domain: `shopname.com`
2. Use any hosting above
3. Connect custom domain

### Option 3: Shared Hosting (₹50-200/month)
- Hostinger, Bluehost, etc.
- Upload via FTP
- Access via: `shopname.com`

---

## 💡 Tips for ₹500 Business Model

### What to Charge For:
1. **Website Setup**: ₹500 (one-time)
   - Customized template
   - Shop details added
   - Images uploaded
   - Testing completed

2. **Optional Add-ons**:
   - Custom domain: ₹200-300 extra
   - Logo design: ₹300 extra
   - Professional photos: ₹200 extra
   - Google Form setup: ₹100 extra

### Time Required per Shop:
- **1-2 hours** for complete customization
- Faster with practice
- Can do 3-4 shops per day

### What You Need from Client:
1. Shop name and location
2. Phone number
3. Business hours
4. Services/Products list
5. Shop photos (2-3 images)
6. Logo (if available)
7. Customer reviews (optional)

---

## 🎨 Customization Quick Reference

| Element | File | What to Change |
|---------|------|----------------|
| Shop Name | All HTML files | Search & replace text |
| Phone | All HTML files | `+919876543210` |
| Colors | style.css | `:root` variables |
| Services | index.html | Service cards section |
| About Info | about.html | All text content |
| Contact Info | contact.html | Address, hours, map |
| Logo | images/ | Replace logo.png |
| Photos | images/ | Replace image files |

---

## 🔥 Advanced Customizations (Optional)

### Change Fonts:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Add WhatsApp Chat Widget:
```html
<!-- Before </body> -->
<script src="https://apps.elfsight.com/p/platform.js"></script>
<div class="elfsight-app-YOUR-ID"></div>
```

### Add Google Analytics:
```html
<!-- In <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### Add Facebook Pixel:
```html
<!-- In <head> section -->
<script>
  !function(f,b,e,v,n,t,s){...}
</script>
```

---

## 📞 Support & Questions

If you face any issues:
1. Check all file names match exactly
2. Ensure images are in `/images/` folder
3. Verify phone numbers include country code
4. Test on different browsers
5. Check browser console for errors (F12)

---

## 📋 Example Shops You Can Create

1. **Pan Shop**
   - Services: Pan, Cigarettes, Snacks
   - Colors: Red/Orange
   - Icons: Shopping cart, store

2. **Mobile Shop**
   - Services: Repair, Accessories, Sales
   - Colors: Blue
   - Icons: Phone, tools

3. **Medical Store**
   - Services: Medicines, Health Products
   - Colors: Green/Blue
   - Icons: Pills, hospital

4. **Tailoring Shop**
   - Services: Stitching, Alterations, Design
   - Colors: Purple/Pink
   - Icons: Scissors, shirt

5. **Grocery Store**
   - Services: Fresh Products, Home Delivery
   - Colors: Green
   - Icons: Shopping basket, food

6. **Electronics Repair**
   - Services: TV, Fridge, AC Repair
   - Colors: Blue/Gray
   - Icons: Tools, appliances

---

## ✅ Final Checklist Before Delivery

- [ ] Shop name updated everywhere
- [ ] Phone numbers work (test call & WhatsApp)
- [ ] All images loaded
- [ ] Services list accurate
- [ ] About page personalized
- [ ] Contact info correct
- [ ] Google Maps points to correct location
- [ ] Mobile responsive tested
- [ ] All links work
- [ ] No placeholder text remaining
- [ ] Browser tested (Chrome, Firefox, Safari)
- [ ] Speed test passed (use PageSpeed Insights)

---

## 🎯 Business Growth Tips

1. **Start with 5-10 shops** to build portfolio
2. Take before/after screenshots
3. Collect testimonials from shop owners
4. Offer package deals (5 shops = ₹2000)
5. Upsell: domain, hosting, maintenance
6. Create Instagram/Facebook for marketing
7. Offer monthly maintenance (₹200/month)

---

## 📄 License

Free to use for your ₹500 business model!
Feel free to modify and resell.

---

**Created for local shop owners**
**Simple. Fast. Affordable. Professional.**

Good luck with your business! 🚀
