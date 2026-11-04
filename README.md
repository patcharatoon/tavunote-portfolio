# Tavunote — AI Meeting SaaS Frontend Concept

A modern, responsive SaaS landing page and interactive frontend prototype for a fictional AI meeting assistant.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and reusable React components.

> **Portfolio Project:** A personal frontend concept created for demonstration purposes. This is not a real AI product or client commission.

## Live Demo

Coming soon — deployment in progress.

## Overview

Tavunote is a fictional AI meeting assistant concept designed to demonstrate modern frontend development practices.

The website showcases responsive layouts, interactive UI components, reusable component architecture, and basic SEO implementation.

All meeting data, subscription plans, and AI-related features are simulated for demonstration purposes.

## Features

- Responsive layouts for desktop, tablet, and mobile
- Interactive mobile navigation
- AI Summary and Transcript preview tabs
- Action item search and filtering
- Monthly / Yearly pricing toggle
- Accessible FAQ accordion
- Smooth anchor link navigation
- Reusable UI components
- SEO metadata, favicon, robots.txt, and sitemap.xml

## Tech Stack

| Technology     | Purpose                         |
| -------------- | ------------------------------- |
| Next.js 16     | React framework with App Router |
| React          | Component-based UI development  |
| TypeScript     | Type safety                     |
| Tailwind CSS 3 | Styling and responsive design   |
| Lucide React   | Icons                           |
| Google Fonts   | DM Sans and Plus Jakarta Sans   |
| Prettier       | Code formatting                 |

## Getting Started

### Requirements

- Node.js >= 20.9.0 (LTS recommended)
- npm

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```text
app/
├── globals.css        # Global styles
├── icon.svg           # Favicon
├── layout.tsx         # Root layout and metadata
├── page.tsx           # Home page
├── robots.ts          # Robots configuration
└── sitemap.ts         # Sitemap generation

components/
├── demo/
│   └── DemoBoard.tsx  # Interactive meeting preview
├── layout/
│   ├── Footer.tsx
│   └── Navbar.tsx
├── sections/
│   ├── FAQ.tsx
│   ├── Features.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   └── Pricing.tsx
├── ui/                # Shared reusable UI components
└── site.tsx           # Main page composition

public/                # Static assets

next.config.ts         # Next.js configuration
tailwind.config.ts     # Tailwind CSS configuration
postcss.config.js      # PostCSS configuration
tsconfig.json          # TypeScript configuration
package.json           # Dependencies and scripts
```

## Interactive Components

### Meeting Preview

The interactive meeting preview demonstrates:

- Switching between AI Summary and Transcript tabs
- Displaying fictional meeting highlights
- Searching and filtering action items
- Presenting sample meeting participants

### Pricing

The pricing section includes:

- Monthly and yearly billing options
- Dynamic price updates
- Responsive pricing cards

All prices are illustrative. No real billing service is connected.

### FAQ

The FAQ section uses an interactive accordion to expand and collapse answers.

## Responsive Design

The website is designed to support different screen sizes, including:

- Desktop
- Tablet
- Mobile

Responsive layouts are implemented using Tailwind CSS utilities.

## SEO

Basic technical SEO features include:

- Page title and meta description
- Next.js Metadata API
- Open Graph metadata
- Favicon
- Sitemap generation
- Robots configuration
- Semantic HTML structure

## Code Formatting

Prettier is used to maintain consistent code formatting.

Formatting conventions:

- Single quotes
- 100-character print width
- Consistent JSX and TypeScript formatting

To format the project, run:

```bash
npm run format
```

## Scope & Disclaimer

Tavunote is a **fictional SaaS frontend concept** created as a personal portfolio project.

The application does not include:

- Real meeting recording or transcription
- AI inference or AI API integration
- User authentication
- Payment processing
- Database integration
- Backend services

All meeting information, features, and pricing are provided for demonstration purposes only.

## License

**All rights reserved.**

This project was created for personal portfolio and demonstration purposes only.

The source code is publicly available for viewing and evaluation. No permission is granted for redistribution, modification, or commercial reuse without prior authorization.
