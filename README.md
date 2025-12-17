# Nexora Digital - Modern Digital Agency Website with CMS

A complete modern digital agency website with an integrated admin CMS built with Next.js 15, featuring glassmorphism design, smooth animations, and responsive layouts.

## Features

### Public Website
- **Home Page** - Hero section, services overview, why choose us, recent work, CTA banner
- **About Page** - Company story, mission, values
- **Services Page** - Detailed service offerings with features
- **Contact Page** - Contact form with validation, contact information

### Admin CMS (Protected Routes)
- **Login** - Secure authentication with glassmorphism design
- **Dashboard** - Overview stats, recent activity
- **Page Editor** - Edit website pages content
- **Messages** - View and manage contact form submissions
- **Settings** - Site name, description, logo management

## Design System

- **Style**: Modern SaaS with glassmorphism
- **Theme**: Light/Dark mode toggle (white and dark purple themes)
- **Effects**: Backdrop blur, transparent elements, glow effects
- **Animations**: Smooth transitions, micro-interactions via Framer Motion
- **Typography**: Inter font family with strong hierarchy

## Admin Credentials

**Demo Access:**
- Username: `Trueadmin`
- Password: `bhayana44`

> **Important:** Admin credentials are demo seed credentials for portfolio demonstration purposes. In production, credentials should be stored securely with proper password hashing in a database.

## Project Structure

```
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── services/page.tsx        # Services page
│   ├── contact/page.tsx         # Contact page
│   ├── admin/
│   │   ├── login/page.tsx       # Admin login
│   │   ├── dashboard/page.tsx   # Admin dashboard
│   │   ├── pages/page.tsx       # Page editor
│   │   ├── messages/page.tsx    # Contact messages
│   │   └── settings/page.tsx    # Site settings
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles & design tokens
├── components/
│   ├── layout/
│   │   ├── navbar.tsx           # Public navigation
│   │   └── footer.tsx           # Public footer
│   ├── sections/
│   │   ├── hero-section.tsx     # Hero section
│   │   ├── services-overview.tsx
│   │   ├── why-choose-us.tsx
│   │   ├── capabilities.tsx
│   │   └── cta-banner.tsx
│   ├── admin/
│   │   ├── admin-layout.tsx     # Admin layout wrapper
│   │   └── admin-sidebar.tsx    # Admin navigation
│   └── ui/
│       ├── glass-button.tsx     # Glassmorphism button
│       ├── glass-card.tsx       # Glassmorphism card
│       ├── glass-input.tsx      # Glassmorphism input
│       ├── glass-textarea.tsx   # Glassmorphism textarea
│       └── theme-toggle.tsx     # Dark/Light mode toggle
├── contexts/
│   ├── auth-context.tsx         # Authentication context
│   └── theme-context.tsx        # Theme context
└── README.md
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State**: React Context API

## Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Collapsible navigation on mobile
- Adaptive layouts for all screen sizes

## Routes

### Public Routes
- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact page

### Admin Routes (Protected)
- `/admin/login` - Admin login
- `/admin/dashboard` - Dashboard
- `/admin/pages` - Page editor
- `/admin/messages` - Contact messages
- `/admin/settings` - Site settings

## License

MIT License - feel free to use this template for your projects.
