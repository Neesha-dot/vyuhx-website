# VyuhX Technologies Website

## Overview

This is a modern, professional single-page marketing website for VyuhX Technologies, a technology solutions company. The site showcases their services, portfolio, expertise, and company journey with polished animations and responsive design. It features a hero section with background video, smooth scroll navigation, animated statistics, technology carousels, and a contact form with database persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom build script for production
- **Routing**: Wouter (lightweight React router alternative)
- **Styling**: Tailwind CSS with custom theme configuration including brand colors (cyan, darkblue)
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for scroll animations and transitions
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query (React Query) for server state

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas shared between client and server

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components (Home, 404)
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Backend Express server
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schemas
│   └── routes.ts     # API route type definitions
└── migrations/       # Database migrations (Drizzle Kit)
```

### Design Patterns
- **Shared Schema Validation**: Zod schemas defined in `shared/schema.ts` are used for both database types and API validation
- **Component-Based UI**: shadcn/ui provides consistent, accessible components
- **Custom Theming**: Extended Tailwind config with CSS variables for light/dark mode support and brand colors
- **Path Aliases**: TypeScript path aliases (`@/`, `@shared/`) for clean imports

### Database Schema
- **contact_messages**: Stores contact form submissions with fields for name, email, phone, subject, message, and timestamp

## External Dependencies

### Database
- **PostgreSQL**: Primary database accessed via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database operations with PostgreSQL adapter
- **Drizzle Kit**: Database migration tooling (`db:push` command)

### Key Frontend Libraries
- **Framer Motion**: Scroll-based animations and section transitions
- **react-scroll**: Smooth scrolling between page sections
- **react-countup**: Animated number counters for statistics
- **embla-carousel-react**: Technology stack infinite carousel with auto-scroll
- **lucide-react**: Icon library

### UI Framework
- **shadcn/ui**: Comprehensive component library
- **Radix UI**: Underlying accessible primitives for all interactive components
- **Tailwind CSS**: Utility-first styling with custom theme extensions

### Build & Development
- **Vite**: Development server and production bundler
- **esbuild**: Server-side bundling for production
- **tsx**: TypeScript execution for development