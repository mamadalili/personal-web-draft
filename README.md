<div align="center">

# MohamadReza Portfolio

**A modern, glassmorphism-styled personal portfolio.** Built with pure HTML, Tailwind CSS, and Vanilla JavaScript.

[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## ✨ Key Features

- **💎 Glassmorphism UI:** Modern frosted glass effects with smooth gradient animations.
- **📱 Fully Responsive:** Mobile-first design that adapts to all screen sizes.
- **⚡ Lightweight & Fast:** ~50KB total size. No build tools or external heavy libraries required.
- **🌍 Bilingual Support:** English interface + Persian (RTL) Contact page with Vazir font.
- **🔔 Interactive:** Custom toast notifications and form validation logic (No backend required).
A modern, responsive personal portfolio website built with HTML, CSS (Tailwind), and JavaScript featuring glassmorphism design and smooth animations.

## 📁 Project Structure

```
portfolio/
├── index.html          # Home page
├── profile.html        # CV/Profile page
├── contact.html        # Contact page (Persian RTL)
├── style.css          # Shared styles and animations
├── script.js          # Shared JavaScript functionality
├── images/            # Image assets folder
│   └── myphoto.jpg    # Profile picture
└── README.md          # This file
```

## Features

### Design
- **Glassmorphism UI**: Modern frosted glass effects with backdrop blur
- **Gradient Animations**: Animated top bar with pulsing gradient
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Transitions**: Hover effects and page animations
- **Persian Support**: RTL layout with Vazir font for contact page

### Functionality
- **Toast Notifications**: User feedback system
- **Form Validation**: Contact form with email validation
- **In-Memory Storage**: State management without localStorage
- **Smooth Scrolling**: Enhanced navigation experience
- **Accessibility**: Keyboard navigation and focus states


### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - pure HTML/CSS/JS

### Installation

1. Clone or download the repository
2. Place your profile photo in `images/myphoto.jpg`
3. Open `index.html` in your browser

### File Locations
- All HTML files should be in the root directory
- CSS file (`style.css`) in root directory
- JavaScript file (`script.js`) in root directory
- Images in `images/` folder

## Pages Overview

### Home Page (`index.html`)
- Hero section with gradient title
- Name input with welcome functionality
- Three feature cards showcasing skills
- Dropdown navigation menu

### Profile Page (`profile.html`)
- Profile picture with hover effect
- Skills section
- Experience timeline
- Social media links

### Contact Page (`contact.html`)
- RTL Persian layout
- Contact form with validation
- Four contact method cards (LinkedIn, Email, Phone, GitHub)
- Toast notifications for form submission

## Customization

### Colors
Main color scheme defined in gradient:
- Dark Blue: `#04142A`
- Blue: `#067CC2`
- Bright Yellow: `#E4FF00`


### Fonts
- **English**: Poppins (Google Fonts)
- **Persian**: Vazir (FontCDN)

## 🔧 Technical Details


## 📝 Development Guide

### Adding New Pages
1. Copy structure from existing HTML file
2. Include common elements:
   ```html
   <link rel="stylesheet" href="style.css">
   <script src="script.js"></script>
   ```
3. Add navigation link to all pages
4. Update active state in navigation

### Adding New Styles
Add custom CSS to `style.css` following the existing structure:
- Use CSS custom properties for colors
- Follow BEM naming convention
- Add comments for complex selectors

### Adding New Features
1. Add HTML structure
2. Style with Tailwind + custom CSS
3. Add JavaScript to `script.js`
4. Test across all pages

## Privacy & Security

- No data sent to external servers
- Form submissions stored in browser memory only
- No cookies or persistent storage
- No tracking scripts

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Design Philosophy

This portfolio follows modern web design principles:
1. **Minimalism**: Clean, uncluttered interface
2. **Visual Hierarchy**: Clear content organization
3. **User Feedback**: Toast notifications and hover states
4. **Accessibility**: Keyboard navigation and semantic HTML
5. **Performance**: Optimized assets and animations

<div align="center">
  <h2>📬 Contact Me</h2>
  <p>Interested in working together? Let's talk.</p>

  <table style="border: none; border-collapse: collapse;">
    <tr>
      <td style="padding: 10px;">
        <a href="mailto:mohammadreza.dalili@live.com">
          <img src="https://img.icons8.com/ios-filled/50/000000/email-open.png" width="25" style="vertical-align:middle;"/>
        </a>
      </td>
      <td style="padding: 10px; text-align: left;">
        <strong>Email:</strong> <a href="mailto:mohammadreza.dalili@live.com" style="text-decoration: none; color: #333;">mohammadreza.dalili@live.com</a>
      </td>
    </tr>
    <tr>
      <td style="padding: 10px;">
        <a href="https://www.linkedin.com/in/mohamadreza-dalili/">
          <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" width="25" style="vertical-align:middle;"/>
        </a>
      </td>
      <td style="padding: 10px; text-align: left;">
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mohamadreza-dalili/" target="_blank" style="text-decoration: none; color: #0077b5;">/in/mohamadreza-dalili</a>
      </td>
    </tr>
    <tr>
      <td style="padding: 10px;">
        <a href="https://mrdalili.com">
          <img src="https://img.icons8.com/ios-filled/50/000000/globe.png" width="25" style="vertical-align:middle;"/>
        </a>
      </td>
      <td style="padding: 10px; text-align: left;">
        <strong>Portfolio:</strong> <a href="https://mrdalili.com" target="_blank" style="text-decoration: none; color: #333;">mrdalili.com</a>
      </td>
    </tr>
  </table>
</div>

