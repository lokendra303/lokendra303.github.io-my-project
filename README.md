# My Portfolio

A simple, modern, and responsive portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your projects and skills.

## Features

- 🎨 Modern, clean design with gradient backgrounds
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth scrolling and animations
- 🚀 Easy to customize
- 📦 No dependencies or build tools needed
- ✨ SEO friendly

## Project Structure

```
Portfolio/
├── index.html      # Main HTML file
├── styles.css      # Styling
├── script.js       # JavaScript interactivity
└── README.md       # This file
```

## Customization

### Update Your Information

Open `index.html` and update:

1. **Name and Title** - Change "Your Name" and the subtitle in the hero section
2. **About Section** - Update the about text and skills
3. **Projects** - Modify project cards with your own projects
4. **Links** - Update email, GitHub, LinkedIn, and Twitter links in the contact section
5. **Footer** - Update the copyright year

### Colors

To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f5576c;
    /* ... other colors ... */
}
```

## Deployment to GitHub Pages

### Option 1: Automatic (Recommended)

1. Create a new GitHub repository named `yourusername.github.io`
2. Push this portfolio to that repository
3. Your site will be live at `https://yourusername.github.io`

### Option 2: Deploy from Any Repository

1. Create a new GitHub repository (any name)
2. Push this portfolio to the repository
3. Go to repository **Settings** → **Pages**
4. Under "Source", select `main` branch and `/root` folder
5. Click "Save"
6. Your site will be live at `https://yourusername.github.io/repository-name`

## How to Use Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The portfolio works without any build process

## Git Commands for Deployment

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Tips for Better Results

- Add real project images by updating the `project-image` divs
- Link your projects to actual GitHub repositories
- Update all social media links
- Consider adding a custom domain (optional)
- Test responsiveness on mobile devices before deploying

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Feel free to use this portfolio as a template for your own website.

## Need Help?

- Check GitHub Pages documentation: https://pages.github.com/
- Learn more about HTML/CSS: https://developer.mozilla.org/
- Customize further with your own CSS and JavaScript

---

**Happy coding! 🚀**
