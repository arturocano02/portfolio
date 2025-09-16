# Arturo Cano - Portfolio

A modern, responsive portfolio website showcasing AI product design and development work.

## Features

- Responsive design optimized for mobile and desktop
- Interactive project showcases
- Typewriter animations
- Glassmorphism design elements
- Mobile-first approach with fluid typography

## Tech Stack

- Next.js 15 with App Router
- React 18
- Tailwind CSS
- Resend (Email Service)
- Vercel deployment

## Analytics

Analytics are powered by Vercel Web Analytics and Speed Insights.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Email Setup

To enable the contact form to send emails:

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```
4. The contact form will automatically send emails to `arturocanodesigns@gmail.com`
