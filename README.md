# Catalyst Analytics — AI & Data Engineering Web Application

Modern, pixel-perfect React + Tailwind CSS web platform converted with 100% fidelity from Figma designs.

## 🚀 Live Local Demo
- **URL**: `http://localhost:5173/`

## 📁 Project Architecture & Pages

1. **Home (`/`)**
   - Hero banner with headline `Transforming Data into Decisions` (with electric blue pill accent badge)
   - 3D futuristic AI robot mascot holding a glowing green shield
   - Social proof ratings (500+ Businesses Trust Us, client avatars & 5-star ratings)
   - Corporate partner logos marquee (Zapier, Spotify, Zoom, Slack, Amazon, Adobe)
   - 3 Feature Implementation Cards (Predictive Analytics, AI Consulting, Data Engineering)
   - "Why Choose Us" circular badges (Innovation, Collaboration, Precision, Integrity)
   - "Why We Started" client quote carousel with interactive slider navigation (`←` and `→`)
   - "Frequently Asked Questions" interactive accordion with smooth collapsible drawers (item 01 expanded by default)

2. **Services (`/services`)**
   - Hero banner `Our Comprehensive Digital Solutions` with 3D mechanical gears illustration & wireframe circuit backdrop
   - "Our Services" grid with 6 core services (Machine Learning Solutions, Blockchain Development, Algorithmic Trading, Data Engineering, Predictive Analytics, Platform & Infrastructure)
   - "Industries We Serve" grid with 6 industry verticals (Financial Services, Blockchain & Crypto, Esports & Gaming, Healthcare & Life Sciences, Manufacturing, Retail & E-commerce)
   - Interactive `Read More ↗` buttons opening detailed technical specification modals

3. **Portfolio / Case Studies (`/portfolio`)**
   - Hero banner `Our Work, Your Future` with 3D multi-window dashboard interface
   - Search & Filter bar:
     - Live keyword search input
     - Category dropdowns (`Machine Learning`, `Data Engineering`, etc.)
     - `Clear All` reset button
   - 6 Case Studies grid with preview images and bullet point summaries
   - `Case Study Details` modal with production metrics, deliverables, and architecture
   - `Load More Case Studies` / `⟳ Loading...` interactive state

4. **Careers (`/careers`)**
   - Hero banner `Build the Future with Us` with 3D executive briefcase illustration
   - Filter bar: Departments, Experience, Job Type, Workplace Type, keyword search
   - 4 Open Positions cards: Web Designer, Mobile App Developer, Digital Marketing Specialist, Project Manager
   - Functional `Apply Now` modal with form fields, file drag-and-drop resume uploader, validation, and success state
   - `READY TO DISCUSS` bottom banner with `Get in Touch` button

5. **Contact Us (`/contact`)**
   - Hero banner `Contact Us` with 3D glossy chat bubbles illustration
   - Functional message form with validation: First Name, Last Name, Email, Company, Country Code selector flag dropdown, Message
   - Contact information cards with clickable email, phone, and office address (Austin, TX)
   - `Book a Meeting` interactive consultation scheduler modal (calendar date & time slot selector)

6. **About Us (`/about`)**
   - Dedicated route matching the exact branding, typography, and dark UI aesthetic
   - Structure ready to receive the Figma About page UI screenshot immediately upon upload

## 🛠️ Tech Stack
- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React + custom inline SVGs
- **Router**: React Router DOM v7
- **Fonts**: Plus Jakarta Sans

## 💻 Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting check
npm run lint

# Production build
npm run build
```
