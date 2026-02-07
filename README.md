# Webflung - Consultation Website

A professional, responsive consultation website built with HTML, CSS, and JavaScript, ready to be hosted on Webflow.

## 🌟 Features

- **Dark/Light Mode**: Toggle between dark and light themes with DaisyUI - preference saved to localStorage
- **Modern Design**: Clean, professional layout with gradient hero section
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Multi-Language Support**: Available in English, Spanish, French, and German with automatic browser language detection
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Contact Form**: Built-in booking form with validation
- **DaisyUI Integration**: Utilizes DaisyUI for theming and styling
- **Webflow Ready**: Easy to upload and customize
- **GitHub Pages**: Automatically deployed with GitHub Actions

## 📁 Project Structure

```
├── index.html          # Main HTML structure with i18n attributes
├── styles.css          # Responsive CSS styling
├── script.js           # Interactive JavaScript
├── i18n.js             # Internationalization with 4 languages
├── WEBFLOW_SETUP.md    # Detailed setup instructions
└── README.md           # This file
```

## 🚀 Quick Start

### View Live Site

Visit the live site hosted on GitHub Pages:
**[https://codetech7.github.io/Webflung/](https://codetech7.github.io/Webflung/)**

### View Locally

1. Clone this repository
2. Open `index.html` in your web browser
3. No build process or installation required!

### Deploy to Webflow

See [WEBFLOW_SETUP.md](WEBFLOW_SETUP.md) for detailed instructions on uploading to Webflow.

### GitHub Pages Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions:
- Any push to the `main` branch triggers a deployment
- The workflow can also be manually triggered from the Actions tab
- The site is deployed from the root directory containing all static files

## 📸 Preview

The website includes:
- **Hero Section**: Eye-catching gradient background with call-to-action
- **Services Section**: 6 service cards with icons and descriptions
- **About Section**: Company information with statistics
- **Testimonials**: Client reviews with star ratings
- **Booking Form**: Contact form with validation
- **Contact Section**: Business information and map placeholder
- **Footer**: Quick links and social media

## 🎨 Customization

### Switch Theme

The site includes a dark/light mode toggle button in the navigation bar. Users can click the theme toggle button (moon icon for dark mode, sun icon for light mode) to switch between themes. The selected theme is automatically saved in localStorage and will persist across sessions.

### Change Languages

The site automatically detects the user's browser language and displays content in:
- English (default)
- Spanish (Español)
- French (Français)
- German (Deutsch)

Users can manually switch languages using the language selector in the navigation bar. The selected language is saved in localStorage for future visits.

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
}
```

### Update Content
All text content is in `index.html` - simply search and replace:
- Company name (currently "ConsultPro")
- Service descriptions
- Testimonials
- Contact information

### Connect Form to Backend
Edit `submitForm()` function in `script.js` to connect to your API endpoint.

## 🔧 Technical Details

- **HTML5** semantic markup
- **CSS3** with Flexbox and Grid
- **Vanilla JavaScript** (ES6+)
- **Mobile-first** responsive design
- **Accessibility** features included
- **SEO-friendly** structure

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 768px
- Desktop: 1200px+

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

Free to use for commercial projects. Customize as needed for your business.

## 🤝 Contributing

Feel free to fork this repository and make it your own!
 
