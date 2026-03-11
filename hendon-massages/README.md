# Hendon Massages — Next.js Website

Professional lead generation website for Hendon Massages, a women-only massage therapy business in North London.

## Features

- **Homepage** — Hero, services overview, areas covered, testimonials, and CTA
- **Services pages** — Individual pages for all 5 treatments (SEO optimised)
- **Area pages** — Dedicated pages for Hendon, Colindale, Brent Cross, Golders Green, Mill Hill, and Edgware
- **Contact/Booking page** — Enquiry form with treatment and area selection
- **SEO** — Metadata on all pages, static generation for all dynamic routes

## Services

1. Swedish Relaxation Massage — £65 / 60 min
2. Sports & Deep Tissue Massage — £75 / 60 min
3. Pregnancy Massage — £70 / 60 min
4. Hot Stone Therapy — £85 / 75 min
5. Aromatherapy Massage — £70 / 60 min

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploying to Vercel via GitHub

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Hendon Massages website"
# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/hendon-massages.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `hendon-massages` repository
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click **"Deploy"**

Your site will be live at `https://hendon-massages.vercel.app` (or your custom domain).

### Custom Domain (optional)

In Vercel project settings → Domains → Add `hendonmassages.co.uk`

## Customisation Checklist

- [ ] Replace `07XXX XXX XXX` with real phone number in `app/contact/page.tsx` and `app/components/Footer.tsx`
- [ ] Replace `jayne@hendonmassages.co.uk` with real email
- [ ] Update prices in `lib/data.ts` if needed
- [ ] Connect contact form to a real backend (e.g. Formspree, Resend, or EmailJS)
- [ ] Add Google Analytics or similar

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Deployed on **Vercel**
