# Webflow Setup Guide

This consultation website is ready to be hosted on Webflow. Follow these instructions to upload and configure your site.

## Files Included

- **index.html** - Main HTML structure
- **styles.css** - Responsive CSS styling
- **script.js** - Interactive JavaScript functionality

## How to Upload to Webflow

### Option 1: Custom Code Export (Recommended for Full Control)

1. **Create a New Webflow Project**
   - Log into your Webflow account
   - Create a new blank site

2. **Add Custom Code**
   - Go to Project Settings > Custom Code
   - In the **Head Code** section, add:
     ```html
     <link rel="stylesheet" href="styles.css">
     ```
   - In the **Footer Code** section, add:
     ```html
     <script src="script.js"></script>
     ```

3. **Upload Static Files**
   - Go to the Assets panel in Webflow
   - Upload `styles.css` and `script.js` as static files
   - Update the links in custom code to point to the uploaded URLs

4. **Add HTML Content**
   - Create pages in Webflow Designer
   - Use HTML Embed elements to add sections from `index.html`
   - Or use Webflow's visual designer to recreate the structure

### Option 2: HTML Export Method

1. **Export from Webflow**
   - If you have a paid Webflow account with export capability
   - Create a basic structure in Webflow
   - Export the site

2. **Integrate Files**
   - Replace the exported HTML with `index.html`
   - Add `styles.css` to the exported CSS
   - Add `script.js` to the exported JS folder

3. **Re-upload to Webflow**
   - Upload the modified files back to your hosting

### Option 3: Direct Hosting (Not Webflow, but Alternative)

If you prefer to host elsewhere:
1. Upload all three files to your web server
2. Ensure they're in the same directory
3. Access via `index.html`

## Features Included

### Desktop Features
- ✅ Smooth scrolling navigation
- ✅ Interactive service cards with hover effects
- ✅ Form validation and submission
- ✅ Professional color scheme and typography
- ✅ Testimonial section with star ratings
- ✅ Contact information section

### Mobile Features
- ✅ Responsive hamburger menu
- ✅ Touch-friendly navigation
- ✅ Mobile-optimized forms
- ✅ Adaptive layouts for all screen sizes

## Customization

### Colors
Edit the CSS variables in `styles.css` (lines 11-21):
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* etc. */
}
```

### Content
All content can be edited directly in `index.html`:
- Company name: Search for "ConsultPro"
- Services: Look for the `.service-card` sections
- Testimonials: Find the `.testimonial-card` sections
- Contact info: Update the `.contact-details` section

### Form Submission
The form currently uses a simulated submission. To connect it to a real backend:
1. Edit the `submitForm()` function in `script.js` (line 94)
2. Replace the setTimeout with an actual API call:
```javascript
fetch('/your-api-endpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
```

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies or frameworks
- Lightweight files (total ~31KB)
- Fast load times
- Optimized for SEO

## Support

For questions or issues, refer to the code comments in each file for detailed explanations of functionality.

## License

This code is ready for commercial use. Customize as needed for your consultation business.
