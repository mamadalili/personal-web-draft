# MohamadReza Portfolio Website

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

## 🎨 Features

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

## 🚀 Getting Started

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

## 🎯 Pages Overview

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

## 🎨 Customization

### Colors
Main color scheme defined in gradient:
- Dark Blue: `#04142A`
- Blue: `#067CC2`
- Bright Yellow: `#E4FF00`

To change colors, update these values in:
- HTML gradient classes
- CSS hover states
- JavaScript (if needed)

### Fonts
- **English**: Poppins (Google Fonts)
- **Persian**: Vazir (FontCDN)

### Content
Update the following in HTML files:
1. Your name in `<h1>` tags
2. Bio/description in `<p>` tags
3. Experience list in `profile.html`
4. Social media links in navigation and contact page

## 🔧 Technical Details

### Dependencies
- **Tailwind CSS**: Via CDN (no compilation needed)
- **Google Fonts**: Poppins font family
- **Vazir Font**: Persian typography via CDN

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance
- Lightweight: ~50KB total (excluding images)
- No external JavaScript libraries
- CSS animations use GPU acceleration
- Optimized with `backdrop-filter` for modern browsers

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

## 🔒 Privacy & Security

- No data sent to external servers
- Form submissions stored in browser memory only
- No cookies or persistent storage
- No tracking scripts

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Design Philosophy

This portfolio follows modern web design principles:
1. **Minimalism**: Clean, uncluttered interface
2. **Visual Hierarchy**: Clear content organization
3. **User Feedback**: Toast notifications and hover states
4. **Accessibility**: Keyboard navigation and semantic HTML
5. **Performance**: Optimized assets and animations

## 🤝 Contributing

To improve this project:
1. Test on different devices
2. Report bugs or suggest features
3. Optimize performance
4. Enhance accessibility

## 📄 License

This project is free to use for personal portfolios.

## 👤 Author

**MohamadReza Dalili**
- GitHub: [@mamadalili](https://github.com/mamadalili)
- LinkedIn: [Mohamad-Reza-Dalili](https://www.linkedin.com/in/mohamadreza-dalili/)

## 🙏 Acknowledgments

- Tailwind CSS for utility classes
- Google Fonts for typography
- Vazir Font for Persian support

---


**Built with 💙 by MohamadReza** | Last Updated: 2025
