# Ridham Gagani - Pulse & Ecosystem Platform (React + Vite)

A modern, high-performance replica of Ridham Gagani's official website and **Pulse (Articles / Journal)** platform, built with **React.js**, **Vite**, **Tailwind CSS**, and **React Router DOM**.

---

## ✨ Features

- **Exact Visual Replica of ridhamshah.com/pulse**:
  - **Header & Navigation**: Fixed translucent navbar with blur effect (`bg-white/80 backdrop-blur-xl`), logo badge, clean navigation links (`Event`, `Articles`, `Connect`), and mobile drawer menu.
  - **Today's Highlight**: Featured pulse article hero with large thumbnail, category badge, relative timestamp ("2 hr ago", "3d ago"), excerpt, and read more action.
  - **Trending Pulses**: List of all articles with responsive layout, image thumbnails, category tags, relative dates, and hover animations.
  - **Search & Filter**: Real-time search across titles and rich article contents.
  - **Pagination Controls**: Clean page navigation matching the original site.
  - **Article Detail Page (`/pulse/:id`)**: Rich typography, reading time estimate, publication date, author bio, social sharing (LinkedIn, Twitter/X, Copy Link with toast), and related articles.
  - **Home Page (`/`)**: Ridham Gagani overview, stats counter, "Future I See" strategic vision, and "Real Estate Works Better Together" ecosystem cards.
  - **Events Page (`/event`)**: Leadership summits, keynotes, and forums.
  - **Connect Page (`/connect`)**: Interactive message/inquiry form with Ahmedabad HQ address and contact details.
  - **Footer**: Exact social media links (LinkedIn, YouTube, Instagram, Facebook, X/Twitter), and Real Estate OS branding.

- **Dual-Data Engine**:
  - Live API fetch from `https://prod-user-service.shivalik.io/api/v1/knowledges/get-list`
  - Instant offline fallback with pre-bundled 86 real articles and CloudFront CDN images.

---

## 🚀 Getting Started

### 1. Requirements
- Node.js (v18 or higher recommended; tested on v23.7.0)
- npm or yarn / pnpm

### 2. Installation
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be created inside the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
personal_project/
├── public/                     # Static assets (logos, favicon)
│   ├── favicon-logo.png
│   ├── r_logo_white.png
│   └── favicon.ico
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Header.jsx          # Header with desktop & mobile nav
│   │   ├── Footer.jsx          # Footer with social links & Real Estate OS badge
│   │   └── Layout.jsx          # Main layout wrapper
│   ├── data/
│   │   └── articlesData.json   # 86 real articles pre-bundled for instant load
│   ├── pages/
│   │   ├── Home.jsx            # Ridham Gagani homepage
│   │   ├── Pulse.jsx           # Pulse / Articles main page (exact match)
│   │   ├── PulseDetail.jsx     # Full article reading page
│   │   ├── Event.jsx           # Events & speaking engagements
│   │   └── Connect.jsx         # Contact form & office details
│   ├── services/
│   │   └── api.js              # Live API client with automatic fallback
│   ├── utils/
│   │   └── formatters.js       # Relative time, HTML stripper, read time
│   ├── App.jsx                 # Routes & layout definition
│   ├── index.css               # Tailwind CSS & custom styling
│   └── main.jsx                # React app entry point
├── index.html                  # HTML entry template with typography
├── package.json                # Dependencies and build scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS theme configuration
└── vite.config.js              # Vite server & build configuration
```

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Routing**: React Router DOM 6
- **Typography**: Plus Jakarta Sans & Inter

