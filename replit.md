# Grupo Saluvia - B2B Medical Supplies Platform

## Overview

Grupo Saluvia is a B2B medical supplies e-commerce platform targeting hospitals, clinics, and laboratories in Brazil. The platform serves as a digital storefront for a company with established public sector contracts to expand into the private healthcare market. The application features a single-page landing site with product showcases, lead generation forms, live chat support, and WhatsApp integration for sales conversion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (currently single-page with 404 fallback)

**UI Component Library**
- Radix UI primitives for accessible, unstyled base components (dialogs, dropdowns, accordions, etc.)
- shadcn/ui design system configured with "new-york" style variant
- Tailwind CSS 3.x for utility-first styling with custom design tokens

**Design System**
- Custom color palette defined in CSS variables (saluviaGreen, saluviaGold, saluviaBeige, saluviaOffwhite)
- System-ui font stack for optimal cross-platform rendering
- Responsive spacing system using Tailwind's spacing scale (4, 6, 8, 12, 16, 20)
- Mobile-first responsive breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

**State Management**
- TanStack Query (React Query) v5 for server state management and data fetching
- React hooks (useState, useEffect, useRef) for local component state
- No global state management library (appropriate for marketing site architecture)

**Key Features**
- Smooth scroll navigation to page sections
- Timed popup modal (5 seconds after page load) for promotional offers
- Floating WhatsApp CTA button with tooltip
- WebSocket-powered live chat sidebar
- Google Forms integration for lead capture

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for HTTP server
- ESM modules throughout the codebase
- Custom Vite middleware integration for development mode

**WebSocket Implementation**
- Native WebSocket server using `ws` library
- Mounted on `/ws` path alongside HTTP server
- Real-time bidirectional chat messaging with client connection management
- Message broadcasting capability for multi-client support

**Session & Storage**
- In-memory storage implementation (`MemStorage` class) for user data
- `connect-pg-simple` included for PostgreSQL session store (not actively used)
- No authentication system currently implemented (public marketing site)

**API Design**
- RESTful conventions expected for future endpoints
- Centralized error handling with status code propagation
- Request/response logging middleware for `/api` routes

### Data Layer

**Database**
- Drizzle ORM configured for PostgreSQL
- Neon serverless database driver (`@neondatabase/serverless`)
- Schema definition in `shared/schema.ts` with Drizzle Zod integration
- Migration output directory: `./migrations`

**Current Schema**
- `users` table with id (UUID), username (unique), and password fields
- Zod validation schemas derived from Drizzle table definitions
- Database credentials loaded from `DATABASE_URL` environment variable

**Data Access Pattern**
- Storage abstraction interface (`IStorage`) for CRUD operations
- Supports swapping between in-memory and database implementations
- Type-safe insertions and selections using inferred TypeScript types

### External Dependencies

**Third-Party Services**
- Google Forms for lead capture and quotation requests (embedded via external link)
- WhatsApp Business messaging (deep link integration with pre-filled message)
- Custom domain/hosting expected (Replit deployment with custom vite plugins)

**UI Component Libraries**
- Radix UI suite: accordion, dialog, dropdown-menu, navigation-menu, popover, select, tabs, toast, tooltip
- Embla Carousel for product showcases
- Lucide React for consistent icon system
- Framer Motion for page animations (imported but usage minimal)
- CMDK for command palette functionality (included but not actively used)

**Utilities & Tools**
- `class-variance-authority` for component variant management
- `clsx` + `tailwind-merge` for conditional className composition
- `date-fns` for date formatting and manipulation
- React Hook Form + Zod resolvers for form validation (included but forms delegate to Google)
- nanoid for unique ID generation

**Development Tools**
- Replit-specific Vite plugins for runtime error overlay, cartographer, and dev banner
- ESBuild for server-side bundling in production
- Drizzle Kit for database migrations and schema management

**Notable Architectural Decisions**
- Static site approach with no server-side rendering (Vite SPA mode)
- External form handling via Google Forms rather than custom backend forms (reduces complexity, leverages familiar Google infrastructure)
- In-memory storage as placeholder allows future database migration without changing interface contracts
- WebSocket chat included for real-time support demonstration, though likely would be replaced with third-party chat service (Intercom, Drift, etc.) in production
- Monorepo structure with `client/`, `server/`, and `shared/` directories for code organization