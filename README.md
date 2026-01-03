# MMTI Webpage - Maritime Training Institute

A modern, responsive web application for the **Mumbai Maritime Training Institute (MMTI)**, showcasing courses, faculty, and institute details. Built as a **first internship project** to develop full-stack frontend skills.

## 📋 Project Overview

The MMTI Webpage is a single-page application (SPA) that serves as a digital presence for a premier maritime training institute. It features course information, faculty profiles, photo gallery, and important institutional notices. The website is optimized for desktop and mobile devices with smooth navigation and engaging user interactions.

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.2.0
- **Routing**: React Router DOM 6
- **Styling**: CSS3 (custom stylesheets)
- **Build Tool**: Vite
- **Package Manager**: npm
- **Browser APIs**: Session Storage (for modal persistence)

## ✨ Key Features

### 1. **Responsive Navigation**
   - Mobile hamburger menu with dropdown support
   - Smart routing integration for page navigation
   - Mobile-optimized course section direct navigation (no dropdown on small screens)
   - Smooth anchor scrolling on the home page

### 2. **Home Page (Hero Section)**
   - Eye-catching banner with gradient overlays
   - Multiple hero sections with rotating dialogue box
   - Important notices about training policies
   - Statistics cards showing institute achievements
   - Call-to-action buttons for course exploration

### 3. **About Section**
   - Center-aligned layout for desktop and mobile
   - Institute information and mission statement
   - Director profiles with images
   - Quality highlights and achievements grid

### 4. **Courses Section**
   - Filterable course catalog by course type
   - Detailed course cards with highlights and duration
   - Important notices section featuring:
     - Certificate charges update
     - Payment policy information
     - Dress code guidelines
     - General conduct and safety rules
   - Responsive grid layout

### 5. **Photo Gallery Page**
   - Dedicated gallery with all images from `photo_gallery` folder
   - Dynamic caption font-sizing based on text length
   - Hover overlay effects on desktop
   - Smooth animations and staggered loading
   - Mobile-responsive grid layout
   - Currently contains 17 high-quality images

### 6. **Faculty Section**
   - Display of experienced instructors
   - Professional faculty profiles

### 7. **Contact Section**
   - Contact form for inquiries
   - Institute location and contact details

### 8. **Important Notice Modal**
   - Appears on first visit (session-based)
   - Highlights achievements and special discounts
   - Professional and accessible design

## 📁 Project Structure

```
mmti-webpage/
├── src/
│   ├── Components/
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Courses.jsx
│   │   ├── Courses.css
│   │   ├── Faculty.jsx
│   │   ├── Faculty.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── navbar.jsx
│   │   ├── navbar.css
│   │   ├── Modal.jsx
│   │   └── Modal.css
│   ├── pages/
│   │   ├── Photo_gallery.jsx
│   │   └── Photo_gallery.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── photo_gallery/
│   └── (17 images from MMTI)
├── img/
│   └── (Logo, banner images)
├── public/
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎨 Design Approach

### Color Scheme
- **Primary**: Ocean Blue (#0f2c5f) - Professional maritime theme
- **Accent**: Cyan (#00d4ff) - Modern, energetic feel
- **Secondary**: Light Blues and Whites - Clean, professional look

### Typography
- **Headings**: Bold, large font sizes with gradient effects
- **Body**: Clear, readable sans-serif fonts
- **Responsive**: Font sizes scale with viewport for optimal readability

### Layout Strategy
- **Desktop**: Multi-column grids, side-by-side layouts, hover effects
- **Mobile**: Single column, touch-friendly buttons, simplified navigation
- **Animations**: Fade-in, slide-up, and stagger effects for engaging UX

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Navigate to project directory
cd mmti-webpage

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173/` (or the next available port).

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📄 Component Details

### App.jsx
- Sets up React Router with BrowserRouter
- Defines routes for `/` (home) and `/gallery` (photo gallery)
- Renders Modal globally for important notices
- Integrates Navbar for navigation

### navbar.jsx
- Responsive navigation with hamburger menu
- Smart route-aware anchor scrolling
- Mobile breakpoint at 768px
- Dropdown menu for courses (desktop only)
- Direct navigation to courses section on mobile

### Modal.jsx
- One-time important notice display per session
- Uses sessionStorage to prevent repeated shows
- Professional styling with scrollable content
- Positioned in bottom-left corner for non-intrusive UX

### Courses.jsx
- Filterable course display system
- Important notices integrated within section
- Dynamic course filtering with smooth transitions

### Photo_gallery.jsx
- Dynamic image loading from `photo_gallery` folder
- Smart caption font-sizing based on text length
- Responsive grid that adapts to screen size

## 🔧 Configuration Files

- **vite.config.js**: Vite build configuration
- **eslint.config.js**: Code quality and style rules
- **package.json**: Project dependencies and scripts

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px - Full features, hover effects
- **Tablet**: 768px - 1024px - Adjusted layouts
- **Mobile**: < 768px - Optimized touch experience, no dropdowns

## 🎓 Learning Outcomes (First Internship Project)

This project provided hands-on experience in:
- ✅ React component architecture and state management
- ✅ React Router for multi-page navigation
- ✅ CSS responsive design and media queries
- ✅ JavaScript DOM manipulation and event handling
- ✅ Session Storage for data persistence
- ✅ Component composition and reusability
- ✅ Mobile-first design approach
- ✅ Git version control
- ✅ Professional UI/UX design principles
- ✅ Accessibility considerations
- ✅ Smooth animations and transitions
- ✅ Image optimization and lazy loading patterns

## 🌟 Notable Features Implemented

1. **Smart Caption Scaling**: Photo gallery captions dynamically adjust font size based on text length
2. **Route-Aware Navigation**: Navbar intelligently handles navigation between pages and internal anchors
3. **Mobile-Optimized Interactions**: Courses dropdown hidden on mobile, direct navigation to section instead
4. **Session-Based Modal**: Important notice appears only once per session, improving UX
5. **Smooth Animations**: Staggered animations, fade-in effects, and hover interactions throughout
6. **Center-Aligned Sections**: About section intelligently centered on desktop while remaining responsive
7. **Responsive Grid Layouts**: Dynamic grid columns that adapt to screen size

## 🎯 Development Highlights

- **Component Reusability**: Modular component design for easy maintenance
- **CSS Best Practices**: BEM naming convention, cascade optimization
- **Performance**: Optimized animations using CSS transforms and transitions
- **Accessibility**: Semantic HTML, proper heading hierarchy, color contrast
- **Browser Compatibility**: Cross-browser tested styling and functionality

## 🚦 Future Enhancements

- Integration with backend API for dynamic course data
- User authentication for course enrollment
- Payment gateway integration
- Student dashboard
- Search and advanced filtering
- Multi-language support
- Dark mode theme
- Email notifications
- Course registration system

## 🤝 How It Works

1. **User lands on home page** → Sees important notice modal (first visit only)
2. **Navigation** → Can scroll through sections or use navbar
3. **Course browsing** → Filter courses by type, view detailed information
4. **Photo gallery** → Access dedicated gallery page with smooth loading
5. **Mobile experience** → Touch-optimized, courses navigate directly
6. **Responsive design** → Automatically adapts to device size

## 📞 Contact & Feedback

For inquiries about MMTI, visit the Contact section on the website or use the course booking options.

---

**Project Status**: ✅ Complete and Fully Functional

**Development Period**: First Internship Project (January 2026)

**Technologies**: React 19 + Vite + React Router v6

*A comprehensive maritime training institute website showcasing modern React development practices, responsive design, and professional UI/UX principles built during first internship.*
