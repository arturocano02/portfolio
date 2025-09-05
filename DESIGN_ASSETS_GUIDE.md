# Design Assets Guide

This document provides guidance on where to place design assets throughout the portfolio website.

## General Guidelines

- All images should be optimized for web (compressed JPG/PNG or WebP format)
- Recommended image dimensions are provided for each placement
- Place all image assets in the `/public/images/` directory
- Use descriptive filenames (e.g., `norton-app-screenshot.png` instead of `img1.png`)

## Home Page

### Hero Section
- No images needed in the hero section

### Partners Section
- **Partner Logos**: `/public/logos/`
  - Format: PNG with transparent background
  - Size: 180px × 80px (maintain aspect ratio)
  - Each logo should be added to the `partnerLogos` array in `/public/logos/index.js`

### Norton Case Study Preview
- **App Preview Image**: `/public/images/norton/preview-1.png`
  - Size: 375px × 667px (mobile app screenshot)
  - Content: Screenshot of the Norton Genie app main interface
- **App Results Image**: `/public/images/norton/preview-2.png`
  - Size: 375px × 667px (mobile app screenshot)
  - Content: Screenshot of the Norton Genie app showing results

### Amazon Case Study Preview
- **Screenshot Image**: `/public/images/amazon/preview.png`
  - Size: 1280px × 720px (16:9 ratio)
  - Content: Screenshot of the Amazon internal tools interface

### Trippl Case Study Preview
- **Screenshot Image**: `/public/images/trippl/preview.png`
  - Size: 1280px × 720px (16:9 ratio)
  - Content: Screenshot of the Trippl app interface

## Norton Case Study Page

### Hero Section
- **Hero Image**: `/public/images/norton/hero.png`
  - Size: 1600px × 900px
  - Content: High-quality image of the Norton Genie app in use

### App Screenshots
- **Screenshot 1**: `/public/images/norton/screen-1.png`
  - Size: 375px × 667px (mobile app screenshot)
  - Content: Norton Genie home screen
- **Screenshot 2**: `/public/images/norton/screen-2.png`
  - Size: 375px × 667px (mobile app screenshot)
  - Content: Norton Genie scan in progress
- **Screenshot 3**: `/public/images/norton/screen-3.png`
  - Size: 375px × 667px (mobile app screenshot)
  - Content: Norton Genie results page

### Process Images
- **Wireframe**: `/public/images/norton/wireframe.png`
  - Size: 1200px × 800px
  - Content: Early wireframes or sketches
- **User Flow**: `/public/images/norton/user-flow.png`
  - Size: 1200px × 800px
  - Content: User flow diagram

## Amazon Case Study Page

### Hero Section
- **Hero Image**: `/public/images/amazon/hero.png`
  - Size: 1600px × 900px
  - Content: High-quality image of the Amazon internal tools

### Tool Screenshots
- **Screenshot 1**: `/public/images/amazon/screen-1.png`
  - Size: 1280px × 720px (16:9 ratio)
  - Content: Dashboard view
- **Screenshot 2**: `/public/images/amazon/screen-2.png`
  - Size: 1280px × 720px (16:9 ratio)
  - Content: Data analysis view
- **Screenshot 3**: `/public/images/amazon/screen-3.png`
  - Size: 1280px × 720px (16:9 ratio)
  - Content: Automation interface

### Process Images
- **Workflow Diagram**: `/public/images/amazon/workflow.png`
  - Size: 1200px × 800px
  - Content: Workflow or process diagram

## Trippl Case Study Page

### Hero Section
- **Hero Image**: `/public/images/trippl/hero.png`
  - Size: 1600px × 900px
  - Content: High-quality image of the Trippl app in use

### App Screenshots
- **Screenshot 1**: `/public/images/trippl/screen-1.png`
  - Size: 375px × 667px (mobile app screenshot)
  - Content: Trippl app home screen
- **Screenshot 2**: `/public/images/trippl/screen-2.png`
  - Size: 375px × 667px (mobile app screenshot)
  - Content: Trippl app feature showcase
- **Screenshot 3**: `/public/images/trippl/screen-3.png`
  - Size: 375px × 667px (mobile app screenshot)
  - Content: Trippl app user interaction

### Process Images
- **User Research**: `/public/images/trippl/research.png`
  - Size: 1200px × 800px
  - Content: User research findings or persona
- **Prototype**: `/public/images/trippl/prototype.png`
  - Size: 1200px × 800px
  - Content: Early prototype or iteration

## Directory Structure

```
/public/
  /images/
    /norton/
      hero.png
      preview-1.png
      preview-2.png
      screen-1.png
      screen-2.png
      screen-3.png
      wireframe.png
      user-flow.png
    /amazon/
      hero.png
      preview.png
      screen-1.png
      screen-2.png
      screen-3.png
      workflow.png
    /trippl/
      hero.png
      preview.png
      screen-1.png
      screen-2.png
      screen-3.png
      research.png
      prototype.png
  /logos/
    index.js
    amazon.png
    norton.png
    trippl.png
    [other partner logos].png
```

## How to Add New Images

1. Place the image file in the appropriate directory
2. For partner logos, update the `partnerLogos` array in `/public/logos/index.js`:

```javascript
export const partnerLogos = [
  {
    name: "Amazon",
    image: "/logos/amazon.png",
    width: 180,
    height: 60
  },
  // Add more logos here
];
```

3. For page images, use the Next.js Image component:

```jsx
import Image from 'next/image';

// In your component:
<Image
  src="/images/norton/hero.png"
  alt="Norton Genie App Interface"
  width={1600}
  height={900}
  className="rounded-lg shadow-lg"
/>
```

4. For placeholder divs until images are ready:

```jsx
<div className="aspect-[9/16] bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
  <p className="text-gray-400">Norton App Preview</p>
</div>
```
