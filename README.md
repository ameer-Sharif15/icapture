# iCapture Agency Website

A modern, responsive website for iCapture Agency built with Next.js, TypeScript, and Tailwind CSS. This project replicates the design and functionality of the Supersolid agency website with custom branding and content.

## Features

- 🚀 **Next.js 14** with App Router
- ⚡ **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- ✨ **Framer Motion** for animations
- 📱 **Responsive Design** for all devices
- 🎯 **Modern UI/UX** with glass morphism effects
- 🔄 **Smooth Animations** and transitions
- 📧 **Contact Form** with validation

## Sections

- **Hero Section**: Eye-catching landing with animated elements
- **Featured Work**: Portfolio showcase with interactive cards
- **Philosophy**: ROIdeas® concept with stats and video player
- **Testimonials**: Client feedback with case studies
- **Contact**: Interactive contact form and company information
- **Footer**: Comprehensive links and social media

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd icapture-agency
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
icapture-agency/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── HeroSection.tsx    # Hero section
│   ├── FeaturedWork.tsx   # Portfolio showcase
│   ├── PhilosophySection.tsx # Philosophy section
│   ├── TestimonialsSection.tsx # Testimonials
│   ├── ContactSection.tsx # Contact form
│   └── Footer.tsx         # Footer component
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  dark: {
    // Your dark theme colors
  }
}
```

### Content

- Update company information in components
- Replace placeholder images with actual assets
- Modify testimonials and case studies
- Update contact information and social links

### Styling

- Modify `app/globals.css` for global styles
- Update component styles using Tailwind classes
- Add custom animations in `tailwind.config.js`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

```bash
npm run build
npm run start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:

- Email: inbox@icapture.agency
- Website: https://icapture.agency

---

Built with ❤️ by iCapture Agency
"# icapture" 
