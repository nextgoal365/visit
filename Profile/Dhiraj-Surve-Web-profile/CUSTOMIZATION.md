# 🎨 Customization Cheat Sheet

Quick reference for common customizations. Copy-paste and modify!

## 🎨 Change Colors

**Location**: `style.css` (Line 5-20)

```css
:root {
    /* CHANGE THESE COLORS */
    --primary-color: #6366f1;        /* Main brand color */
    --secondary-color: #14b8a6;      /* Accent color */
    --accent-color: #f59e0b;         /* Highlights */
}
```

### Popular Color Schemes:

**Tech Blue (Default)**
```css
--primary-color: #6366f1;
--secondary-color: #14b8a6;
--accent-color: #f59e0b;
```

**Professional Purple**
```css
--primary-color: #8b5cf6;
--secondary-color: #ec4899;
--accent-color: #f59e0b;
```

**Modern Green**
```css
--primary-color: #10b981;
--secondary-color: #3b82f6;
--accent-color: #f59e0b;
```

**Bold Orange**
```css
--primary-color: #f97316;
--secondary-color: #eab308;
--accent-color: #14b8a6;
```

**Dark Mode Vibe**
```css
--primary-color: #3b82f6;
--secondary-color: #06b6d4;
--accent-color: #8b5cf6;
--dark: #0f172a;
--light: #1e293b;
```

---

## ✏️ Update Text Content

### Hero Section

**Your Name** (index.html, Line ~79):
```html
Hi, I'm <span class="gradient-text">Your Name</span>
```

**Tagline** (Line ~81):
```html
<p class="hero-subtitle">Your Role • Your Specialty • Your Strength</p>
```

**Description** (Line ~82):
```html
<p class="hero-description">
    Write 2-3 sentences about yourself here. Make it personal and professional.
</p>
```

**Statistics** (Line ~90):
```html
<h3>5+</h3>
<p>Years Experience</p>

<h3>100+</h3>
<p>Students Trained</p>

<h3>50+</h3>
<p>Projects Delivered</p>
```

---

## 📧 Update Contact Information

**Search and replace ALL instances of these:**

1. **Email**: `surved1998@gmail.com` → Your email
2. **Phone**: `+919867616960` → Your number
3. **WhatsApp**: `https://wa.me/919867616960` → Your WhatsApp link
4. **Location**: `Mumbai, Maharashtra, India` → Your location

**Pro Tip**: Use Find & Replace (Ctrl+H) in your editor!

---

## 🔗 Update Social Links

**Location**: Multiple places in `index.html`

```html
<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/YOUR-USERNAME" target="_blank">

<!-- GitHub -->
<a href="https://github.com/YOUR-USERNAME" target="_blank">

<!-- Blog/Website -->
<a href="https://yourblog.com" target="_blank">
```

---

## 🖼️ Change Images

**Location**: All in `/images/` folder

**Required Images:**
- `profile.jpg` (350x350px)
- `project1.jpg` to `project6.jpg` (800x600px)
- `student1.jpg`, `student2.jpg`, `client1.jpg` (100x100px)

**To add more projects:**
1. Add `project7.jpg` to `/images/`
2. Duplicate this code in HTML:

```html
<div class="portfolio-item" data-category="web">
    <div class="portfolio-image">
        <img src="images/project7.jpg" alt="Project Name">
        <div class="portfolio-overlay">
            <h3>Project Title</h3>
            <p>Short description</p>
            <div class="portfolio-tags">
                <span>Tech1</span>
                <span>Tech2</span>
            </div>
            <a href="#" class="portfolio-link">View Project →</a>
        </div>
    </div>
</div>
```

---

## 📝 Add/Edit Teaching Topics

**Location**: Teaching section in `index.html`

**Template for new card:**
```html
<div class="teaching-card" data-aos="fade-up">
    <div class="card-icon">
        <!-- Icon SVG here -->
    </div>
    <h3>Your Topic</h3>
    <p>Description of what you teach</p>
    <ul class="skills-list">
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
        <li>Skill 4</li>
    </ul>
</div>
```

---

## 💬 Update Testimonials

**Location**: Testimonials section

```html
<div class="testimonial-card">
    <div class="quote-icon">"</div>
    <p class="testimonial-text">
        "The actual testimonial text goes here. Keep it 2-3 sentences."
    </p>
    <div class="testimonial-author">
        <img src="images/student1.jpg" alt="Name">
        <div>
            <h4>Person Name</h4>
            <p>Their Job Title</p>
        </div>
    </div>
    <div class="rating">⭐⭐⭐⭐⭐</div>
</div>
```

**To add more testimonials:**
1. Duplicate the above code
2. Update text, image, name
3. JavaScript will auto-include in slider

---

## 🎯 Modify Services

**Location**: Services section

```html
<div class="service-card" data-aos="zoom-in">
    <div class="service-number">01</div>
    <h3>Service Name</h3>
    <p>Service description paragraph</p>
    <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
        <li>Feature 4</li>
    </ul>
</div>
```

---

## 🔤 Change Fonts

**Location**: `index.html` head section & `style.css`

**Step 1**: Find fonts at https://fonts.google.com

**Step 2**: Add to HTML head:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;600;700&display=swap" rel="stylesheet">
```

**Step 3**: Update in CSS:
```css
:root {
    --font-primary: 'Your Font', sans-serif;
}
```

**Popular Font Combos:**

```css
/* Modern & Clean */
--font-primary: 'Inter', sans-serif;

/* Professional */
--font-primary: 'Roboto', sans-serif;

/* Friendly */
--font-primary: 'Nunito', sans-serif;

/* Tech/Code */
--font-primary: 'JetBrains Mono', monospace;

/* Elegant */
--font-primary: 'Raleway', sans-serif;
```

---

## 🎬 Disable Animations

**Don't like animations?** Remove them!

**In `style.css`**, comment out or delete:
```css
/* REMOVE OR COMMENT THESE */
animation: fadeInUp 0.8s ease-out;
animation: float 6s ease-in-out infinite;
animation: pulse 3s ease-in-out infinite;
```

**Or add this to make site instant:**
```css
* {
    animation-duration: 0s !important;
    transition-duration: 0s !important;
}
```

---

## 📱 WhatsApp Contact Form Integration

**How it works**: Form data sends via WhatsApp

**To change**: In `script.js` (Line ~170)

```javascript
// Update this number
window.open(`https://wa.me/YOUR_NUMBER?text=${whatsappMessage}`, '_blank');
```

**Want Email Instead?**

Replace the form submission code with:
```javascript
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Use EmailJS or Formspree
    // See https://www.emailjs.com/ for setup
});
```

---

## 🎨 Custom Button Styles

**Location**: `style.css` (.btn classes)

**Change button colors:**
```css
.btn-primary {
    background: linear-gradient(135deg, #YOUR_COLOR1, #YOUR_COLOR2);
    color: white;
}

.btn-secondary {
    border: 2px solid #YOUR_COLOR;
    color: #YOUR_COLOR;
}
```

**Make buttons rounder:**
```css
.btn {
    border-radius: 50px; /* Change this number */
}
```

---

## 🔍 SEO Optimization

**Location**: `index.html` head section

```html
<!-- Update these -->
<title>Your Name - Your Title | Location</title>
<meta name="description" content="Your 150-character description here">
<meta name="keywords" content="your, keywords, here">

<!-- Add Open Graph for social sharing -->
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/images/profile.jpg">
<meta property="og:url" content="https://yoursite.com">

<!-- Add Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Name">
<meta name="twitter:description" content="Your description">
<meta name="twitter:image" content="https://yoursite.com/images/profile.jpg">
```

---

## 📊 Add Google Analytics

**Location**: Before `</body>` in `index.html`

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

---

## 🎯 Common Quick Fixes

### Remove a section entirely
**Example: Remove Training Formats section**
1. Find `<section class="training-formats">`
2. Delete from `<section>` to `</section>`

### Change section order
1. Cut entire `<section>` block
2. Paste in new location
3. Test navigation links

### Hide on mobile only
```css
@media (max-width: 768px) {
    .element-to-hide {
        display: none;
    }
}
```

### Make text bigger/smaller
```css
.hero-title {
    font-size: 4rem; /* Increase this */
}
```

---

## 💡 Pro Customizations

### Add Favicon (Website Icon)
```html
<!-- In head section -->
<link rel="icon" type="image/png" href="images/favicon.png">
```

### Add Loading Animation
```css
/* In style.css */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 9999;
    opacity: 1;
    transition: opacity 0.5s;
}

body.loaded::before {
    opacity: 0;
    pointer-events: none;
}
```

```javascript
// In script.js
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
```

### Add Smooth Scroll Indicator
Already included! Appears on hero section.

### Custom Cursor (Advanced)
```css
body {
    cursor: url('images/cursor.png'), auto;
}

a:hover {
    cursor: url('images/cursor-hover.png'), pointer;
}
```

---

## 🎨 Color Picker Tools

Need help choosing colors?

1. **Coolors.co** - Generate palettes
2. **ColorHunt.co** - Browse popular palettes
3. **Adobe Color** - Color wheel
4. **Paletton** - Color scheme designer

---

## ✅ Testing Checklist

After customizations:

- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari (if Mac)
- [ ] Test on mobile
- [ ] All links work
- [ ] Images load
- [ ] No console errors (F12)
- [ ] Smooth scrolling works
- [ ] Forms work
- [ ] Looks good!

---

## 🆘 Undo Mistakes

**Broke something?**

1. **Undo**: Ctrl+Z (or Cmd+Z on Mac)
2. **Reload**: Refresh browser
3. **Revert**: Re-download original files
4. **Git**: If using Git, `git checkout .`

---

**Remember**: Save often, test in browser frequently, and change one thing at a time!

Happy customizing! 🎨✨