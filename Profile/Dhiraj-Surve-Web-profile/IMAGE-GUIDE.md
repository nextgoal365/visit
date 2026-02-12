# Image Requirements & Placeholder Guide

This document explains what images you need and where to get free placeholder images while you prepare your own.

## 📷 Required Images

### 1. Profile Photo (`profile.jpg`)
- **Location**: `/images/profile.jpg`
- **Size**: 350x350 pixels (square)
- **Type**: Professional headshot
- **Background**: Clean, solid color or professional setting
- **Format**: JPG or PNG

**Tips for a great profile photo:**
- Dress professionally
- Good lighting (natural light works best)
- Smile naturally
- Look directly at camera
- Use a neutral or simple background
- High resolution (at least 500x500px)

---

### 2. Portfolio Project Screenshots (6 images)

#### `project1.jpg` - Web Development Project
- E-commerce website or business website screenshot
- Size: 800x600 pixels (landscape)

#### `project2.jpg` - Database Project
- Database diagram, schema visualization, or analytics dashboard
- Size: 800x600 pixels

#### `project3.jpg` - Business Website
- Local business website or landing page
- Size: 800x600 pixels

#### `project4.jpg` - Training/Course Project
- Course materials, presentation slides, or student group photo
- Size: 800x600 pixels

#### `project5.jpg` - Database Migration/Enterprise
- Technical diagrams, architecture, or before/after comparisons
- Size: 800x600 pixels

#### `project6.jpg` - Portfolio/Creative Project
- UI/UX design, creative web project, or personal portfolio
- Size: 800x600 pixels

**How to capture project screenshots:**
1. Open your project in browser
2. Use full-screen view
3. Capture using:
   - Windows: Snipping Tool or Win + Shift + S
   - Mac: Cmd + Shift + 4
   - Browser: Developer Tools (F12) → Device toolbar for mobile views

---

### 3. Testimonial Photos (3 images)

#### `student1.jpg` - Female Student/Client
- Size: 100x100 pixels minimum
- Will display as circular
- Professional or casual photo

#### `student2.jpg` - Male Student/Client
- Size: 100x100 pixels minimum
- Circular display

#### `client1.jpg` - Business Client
- Size: 100x100 pixels minimum
- Circular display

---

## 🎨 Free Placeholder Image Resources

While you prepare your real images, use these free resources:

### For Profile Photo:
- **This Person Does Not Exist**: https://thispersondoesnotexist.com/
  - AI-generated faces, royalty-free
  - Refresh for different faces
  
- **UI Faces**: https://uifaces.co/
  - Real people who agreed to use their photos
  
- **Pexels**: https://pexels.com (search "professional headshot")

### For Project Screenshots:
- **Unsplash**: https://unsplash.com/
  - Search terms: "laptop mockup", "website design", "dashboard", "coding"
  
- **Screely**: https://screely.com/
  - Turn screenshots into beautiful mockups
  
- **Mockup World**: https://mockupworld.co/
  - Free device mockups

- **Shots**: https://shots.so/
  - Beautiful browser mockups

### For Testimonial Photos:
- **Random User Generator**: https://randomuser.me/
  - Click "Generate" for random professional photos
  
- **UI Faces**: https://uifaces.co/
  - Download diverse, professional-looking photos

---

## 🖼️ Quick Placeholder Setup (For Testing)

### Method 1: Use Online Placeholder Services

Replace image src in HTML temporarily:

```html
<!-- Profile Photo -->
<img src="https://i.pravatar.cc/350" alt="Profile">

<!-- Project Screenshots -->
<img src="https://picsum.photos/800/600?random=1" alt="Project 1">
<img src="https://picsum.photos/800/600?random=2" alt="Project 2">

<!-- Testimonials -->
<img src="https://i.pravatar.cc/100?img=1" alt="Student">
```

**Services:**
- Lorem Picsum: `https://picsum.photos/WIDTH/HEIGHT`
- Pravatar: `https://i.pravatar.cc/SIZE`
- Placeholder: `https://via.placeholder.com/WIDTHxHEIGHT`

### Method 2: Create Simple Colored Placeholders

Use this website: https://dummyimage.com/

Examples:
- `https://dummyimage.com/350x350/667eea/ffffff&text=Profile`
- `https://dummyimage.com/800x600/764ba2/ffffff&text=Project+1`
- `https://dummyimage.com/100x100/14b8a6/ffffff&text=Student`

---

## 📋 Image Checklist

Before going live, ensure you have:

- [ ] Professional profile photo (350x350px)
- [ ] 6 project screenshots (800x600px each)
- [ ] 3 testimonial photos (100x100px minimum)
- [ ] All images optimized (compressed)
- [ ] All images in correct format (JPG/PNG)
- [ ] All images in `/images/` folder
- [ ] File names match exactly:
  - [ ] profile.jpg
  - [ ] project1.jpg
  - [ ] project2.jpg
  - [ ] project3.jpg
  - [ ] project4.jpg
  - [ ] project5.jpg
  - [ ] project6.jpg
  - [ ] student1.jpg
  - [ ] student2.jpg
  - [ ] client1.jpg

---

## 🎯 Image Optimization Tips

Before uploading images:

1. **Resize to required dimensions**
   - Don't upload 4000x3000 images for 350x350 slots
   - Use online tools: iloveimg.com, squoosh.app

2. **Compress images**
   - Tools: TinyPNG, Compressor.io, Squoosh
   - Aim for under 200KB per image
   - Quality: 80-85% is usually perfect

3. **Use correct format**
   - Photos: JPG
   - Graphics/logos: PNG
   - Never use BMP or TIFF

4. **Test loading speed**
   - Open website and check if images load quickly
   - Use Google PageSpeed Insights

---

## 💡 Creating Your Own Project Screenshots

### If you don't have 6 projects yet:

1. **Take screenshots of practice projects**
   - School/college projects
   - Tutorial projects you've completed
   - Clone websites you've built for learning

2. **Create mockup projects**
   - Design a concept website in Figma/Canva
   - Use website builders to create demo sites
   - Screenshot code snippets with syntax highlighting

3. **Use database diagrams**
   - Create simple database schemas
   - Screenshot pgAdmin/MySQL Workbench
   - Design ER diagrams

4. **Show your work process**
   - Code editor with your code
   - Terminal with commands
   - Planning documents/wireframes

---

## 🚀 Quick Start (5 minutes)

1. **Create `/images/` folder** in same location as index.html

2. **Download placeholder images:**
   - Go to https://picsum.photos/800/600 (Save as project1.jpg)
   - Repeat 6 times with different numbers
   - Go to https://i.pravatar.cc/350 (Save as profile.jpg)
   - Go to https://i.pravatar.cc/100?img=1 (Save as student1.jpg)
   - Repeat with img=2, img=3 for other testimonials

3. **Place all in `/images/` folder**

4. **Open index.html** in browser

5. **Your website is now working!**

Later, replace placeholders with your real images one by one.

---

## ❓ Common Questions

**Q: Can I use different image dimensions?**
A: Yes, but maintain aspect ratios. The site will scale them, but they might look stretched.

**Q: How do I make circular images square?**
A: Don't worry! CSS automatically makes them circular. Just provide square images.

**Q: Can I use screenshots from my phone?**
A: Yes! Just transfer them to computer and resize them.

**Q: What if I don't have testimonials yet?**
A: Create placeholder testimonials for now. Ask real students/clients later.

**Q: Can I add more than 6 projects?**
A: Yes! Just duplicate the portfolio item HTML code and add project7.jpg, project8.jpg, etc.

---

## 🎨 Design Your Own Graphics

If you want custom project images:

1. **Canva** (https://canva.com) - Free
   - Templates for website mockups
   - Database diagrams
   - Presentations

2. **Figma** (https://figma.com) - Free
   - Professional UI design
   - Mockups and prototypes

3. **Excalidraw** (https://excalidraw.com) - Free
   - Hand-drawn style diagrams
   - Database schemas

---

**Remember**: Start with placeholders, get your website live, then improve images over time!

Good luck! 🚀