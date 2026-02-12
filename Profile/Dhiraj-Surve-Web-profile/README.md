# Dhiraj Surve - Professional Portfolio Website

A modern, responsive personal brand website for a Database Developer, Web Developer, and Technology Trainer.

## 🌟 Features

- **Modern Design**: Clean, colorful, and professional aesthetic
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Engaging scroll animations and transitions
- **Interactive Elements**: Portfolio filtering, testimonial slider, contact form
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized performance with lazy loading
- **WhatsApp Integration**: Direct contact via WhatsApp

## 📁 Folder Structure

```
portfolio-website/
│
├── index.html              # Main HTML file
├── style.css               # All styles and animations
├── script.js               # JavaScript functionality
│
├── images/                 # Image assets folder
│   ├── profile.jpg         # Your profile photo (350x350px recommended)
│   ├── project1.jpg        # Portfolio project screenshots
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── project5.jpg
│   ├── project6.jpg
│   ├── student1.jpg        # Testimonial photos (60x60px minimum)
│   ├── student2.jpg
│   └── client1.jpg
│
└── README.md               # This file
```

## 🚀 Quick Start

1. **Download all files** to your computer
2. **Create an `images` folder** in the same directory as index.html
3. **Add your images** to the images folder:
   - `profile.jpg` - Your profile photo
   - `project1.jpg` through `project6.jpg` - Your project screenshots
   - `student1.jpg`, `student2.jpg`, `client1.jpg` - Testimonial photos
4. **Open `index.html`** in your browser to view locally
5. **Customize the content** (see customization guide below)

## 📷 Image Requirements

### Profile Photo (`profile.jpg`)
- **Recommended size**: 350x350px
- **Format**: JPG or PNG
- **Quality**: High resolution, professional headshot
- **Background**: Clean, professional background

### Project Screenshots (`project1.jpg` - `project6.jpg`)
- **Recommended size**: 800x600px (4:3 ratio)
- **Format**: JPG or PNG
- **Content**: Screenshots of your actual projects or mockups

### Testimonial Photos (`student1.jpg`, `student2.jpg`, `client1.jpg`)
- **Minimum size**: 100x100px
- **Format**: JPG or PNG
- **Shape**: Will be displayed as circles

## ✏️ Customization Guide

### 1. Update Personal Information

#### In `index.html`:

**Contact Information** (Search for these and replace):
- `surved1998@gmail.com` - Your email
- `+91 9867616960` - Your phone number
- Update WhatsApp link: `https://wa.me/919867616960`

**Social Links** (Search and update):
```html
<a href="https://www.linkedin.com/in/dhiraj-surve" target="_blank">
<a href="https://github.com/dhiraj-surve" target="_blank">
<a href="https://nextgoal365.com" target="_blank">
```

**Statistics** (Update numbers):
```html
<h3>5+</h3>        <!-- Years of experience -->
<h3>100+</h3>      <!-- Students trained -->
<h3>50+</h3>       <!-- Projects delivered -->
```

### 2. Update Content Sections

#### Hero Section
Find the `.hero-description` paragraph and update with your own intro.

#### Teaching Section
Each teaching card has:
- Icon (SVG)
- Title
- Description
- Skills list

Update the text to match your actual offerings.

#### Services Section
Update the 4 service cards with your actual services and pricing if needed.

#### Training Formats
Modify the format cards to match your actual training options.

#### Portfolio Projects
Update each portfolio item:
```html
<h3>Project Name</h3>
<p>Project Description</p>
<span>Technology</span>
```

#### Testimonials
Replace testimonial text, names, and job titles with real testimonials.

### 3. Customize Colors

#### In `style.css`, find the `:root` section:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #14b8a6;    /* Secondary accent */
    --accent-color: #f59e0b;       /* Accent highlights */
    /* ... more colors */
}
```

Change these hex codes to your preferred colors. The entire site will update automatically!

#### Recommended Color Palettes:

**Tech Blue** (Current):
- Primary: `#6366f1`
- Secondary: `#14b8a6`

**Professional Purple**:
- Primary: `#8b5cf6`
- Secondary: `#ec4899`

**Modern Green**:
- Primary: `#10b981`
- Secondary: `#3b82f6`

**Bold Orange**:
- Primary: `#f97316`
- Secondary: `#eab308`

### 4. Update Meta Tags (SEO)

In `index.html` `<head>` section:

```html
<meta name="description" content="Your custom description">
<title>Your Name - Your Title</title>
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)
1. Create account at netlify.com
2. Drag and drop your folder
3. Get instant live site
4. Custom domain available

### Option 3: Vercel (Free)
1. Create account at vercel.com
2. Import your GitHub repo
3. Automatic deployments

### Option 4: Traditional Web Hosting
- Upload via FTP to any web host
- Works with shared hosting, VPS, etc.

## 📱 Testing Checklist

Before going live, test:

- ✅ All links work correctly
- ✅ Images load properly
- ✅ Contact form sends WhatsApp message
- ✅ Responsive on mobile devices
- ✅ All sections display correctly
- ✅ Navigation menu works
- ✅ Portfolio filter functions
- ✅ Testimonial slider works
- ✅ WhatsApp button opens correctly
- ✅ Social media links are correct

## 🔧 Advanced Customization

### Adding More Projects
1. Duplicate a portfolio item in HTML
2. Update image, title, description, tags
3. Add `data-category` attribute for filtering

### Adding More Testimonials
1. Duplicate a testimonial card
2. Update text, name, image, job title
3. Slider will auto-update

### Changing Fonts
In `index.html` `<head>`, update Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then in `style.css`:
```css
--font-primary: 'Your Font', sans-serif;
```

### Adding Analytics
Add Google Analytics or other tracking code before closing `</body>` tag.

## 🐛 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Ensure images are in `/images/` folder
- Verify image file formats (JPG, PNG)

**WhatsApp button not working?**
- Update phone number in script.js
- Check number format: +[country code][number]

**Mobile menu not working?**
- Ensure script.js is loading
- Check browser console for errors

**Animations not working?**
- Clear browser cache
- Check if JavaScript is enabled

## 📞 Support

If you need help customizing this website, feel free to:
- Email: surved1998@gmail.com
- WhatsApp: +91 9867616960

## 📄 License

This template is free to use for personal and commercial projects.
Credit appreciated but not required!

## 🎨 Inspiration & Credits

Design inspired by:
- Mosh Hamedani (moshhamedani.com)
- Brad Traversy (traversymedia.com)
- Wes Bos (wesbos.com)

Built with ❤️ for developers and trainers who want to showcase their skills professionally.

---

**Last Updated**: February 2025
**Version**: 1.0.0

## 🚀 Quick Launch Checklist

- [ ] Replace all placeholder images
- [ ] Update personal information (name, email, phone)
- [ ] Customize social media links
- [ ] Update portfolio projects
- [ ] Add real testimonials
- [ ] Update statistics/numbers
- [ ] Test on mobile devices
- [ ] Test contact form
- [ ] Check all links
- [ ] Deploy to hosting
- [ ] Share with the world! 🎉
