# Student Connection Platform

## Project Overview

A two-tab web app for Harvard College students to discover classmates and build connections.
- **Tab 1:** Interactive world map where students pin their hometown with a profile
- **Tab 2:** "We're Not Really Strangers"-style card game with tiered conversation prompts

## Key Details

- **School:** Harvard College
- **Authentication:** @college.harvard.edu email only (Clerk or NextAuth recommended)
- **Registration:** Students self-register
- **Profiles:** Email-gated (only registered students can view profiles)

## Tech Stack

- **Frontend:** Next.js (App Router)
- **Map:** Mapbox GL JS
- **Styling:** Tailwind CSS
- **Auth:** Clerk or NextAuth
- **Database:** Supabase (Postgres)
- **Geocoding:** Mapbox Geocoding API
- **Hosting:** Vercel

## MVP Scope (Build in Order)

1. Map with hardcoded/seeded student pins
2. Pin profile card (click to open)
3. Basic filters (class year, concentration, dorm)
4. Prompt cards — all three levels, single-player mode
5. Auth + onboarding form to add your own pin

## Important Files

- `_context/plans/v1.md` — full feature specification and data model
- `/app` — Next.js app routes
- `/components` — reusable React components
- `/public` — static assets (images, SVGs)
