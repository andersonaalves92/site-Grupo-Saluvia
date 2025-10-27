# Design Guidelines - Grupo Saluvia

## Design Approach: Industry-Specific Professional B2B

This is a **B2B medical supplies platform** targeting hospitals, clinics, and laboratories. The design combines institutional credibility with modern commercial appeal, drawing inspiration from professional B2B platforms like Shopify, LinkedIn, and enterprise healthcare suppliers while maintaining a distinctive brand identity.

## Core Design Principles

1. **Credibilidade Institucional**: Visual language that conveys trust, compliance, and professional-grade quality
2. **Eficiência Operacional**: Clear information hierarchy prioritizing quick access to products and quotation
3. **Acessibilidade Premium**: Sophisticated yet approachable aesthetic suitable for medical professionals

## Color System (Fixed by Client)

```
Primary: #0f1e19 (saluviaGreen) - Deep forest green for authority
Accent: #c8a45a (saluviaGold) - Warm gold for trust and premium positioning
Neutral: #e8e6de (saluviaBeige) - Soft beige for readability
Background: #f5f5f5 (saluviaOffwhite) - Clean white for content areas
```

**Color Application**:
- Background: saluviaGreen for navbar, footer, and alternating sections
- CTAs and highlights: saluviaGold for primary buttons and key information
- Text on dark: saluviaBeige for optimal readability
- Content sections: Alternate between saluviaGreen and saluviaBeige/10 backgrounds

## Typography Hierarchy

**Font Families**:
- Headings (font-title): System-ui with font-weight: 600-700
- Body (font-body): System-ui with font-weight: 400-500
- Buttons (font-button): System-ui with font-weight: 600-700

**Scale**:
- H1 (Hero): text-4xl sm:text-5xl lg:text-6xl
- H2 (Section Titles): text-3xl sm:text-4xl
- H3 (Card/Component Titles): text-xl sm:text-2xl
- Body Large: text-lg sm:text-xl
- Body Regular: text-sm sm:text-base
- Small/Legal: text-xs

## Layout System

**Spacing Primitives**: Use Tailwind units of **4, 6, 8, 12, 16, 20** (e.g., p-4, gap-8, py-16, mb-12)

**Container Structure**:
- Max-width: max-w-7xl for all content
- Horizontal padding: px-4 sm:px-6 lg:px-8
- Section vertical padding: py-16 sm:py-20

**Grid Patterns**:
- Hero: 2-column (lg:grid-cols-2) - content left, card right
- Features/Cards: 1-2-3-4 column responsive (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)
- Contact: 2-column (lg:grid-cols-2) - form left, info right

## Component Library

### Navigation
- Sticky header (sticky top-0 z-50)
- Dark background (bg-saluviaGreen) with gold accent logo
- Right-aligned CTA button in saluviaGold
- Smooth scroll navigation for single-page sections

### Hero Section
- Two-column layout with 60/40 split
- Left: Large headline + subheadline + dual CTAs (primary gold button + outline secondary)
- Right: Feature card with saluviaGreen background highlighting key benefit ("Entrega em até 24h")
- No background image - clean gradient (bg-gradient-to-br from-saluviaBeige)

### Cards (Portfolio, Features, Segments)
- Border-radius: rounded-lg (8px)
- Background variations: 
  - Light sections: bg-saluviaBeige/30 with hover:border-saluviaGold/40
  - Dark sections: bg-saluviaGreen with text-saluviaBeige
- Icon containers: w-14 h-14 rounded-lg with bg-saluviaGreen/10 or bg-saluviaGold/20
- Hover effect: hover-elevate class (shadow-md → shadow-xl transition)

### Buttons
- Primary: bg-saluviaGold with dark text, shadow-lg
- Secondary/Outline: border-2 border-saluviaGreen text-saluviaGreen hover:bg-saluviaGreen hover:text-white
- Link style: text-saluviaGold hover:text-saluviaGold/80 underline
- Size: Default lg (min-h-10 px-8) for CTAs

### Forms (Contact Section)
- Card-based layout with dark background (bg-saluviaGreen)
- Benefit checklist with check icons before form
- Single large CTA button linking to Google Form
- Contact information in sidebar card

### Footer
- 4-column grid (md:grid-cols-2 lg:grid-cols-4)
- Logo, Navigation links, Contact info, Social media
- Subdued text (text-white/80) with hover states
- Bottom bar with copyright and legal links

### Interactive Elements
- **WhatsApp Button**: Fixed bottom-right (bottom-6 right-6), circular (w-16 h-16 rounded-full), saluviaGreen background, ping animation
- **Popup Oferta**: Modal overlay with centered card, gift icon, benefits checklist
- **Chat Lateral**: Minimizable chat widget, WebSocket-ready structure

## Images Strategy

**Hero Section**: No large hero image - relies on clean gradient background and structured card layout for visual impact

**Portfolio Cards**: 
- Image placement: Top of card (h-48 w-full object-cover rounded-t-lg)
- Images needed in `/public/imagens/`:
  - protecao-descartaveis.jpg
  - materiais-cirurgicos.jpg
  - equipamentos-medicos.jpg
  - instrumentais.jpg
  - estetica-veterinaria.jpg
  - suporte-vida.jpg
- Gradient overlay: absolute inset-0 bg-gradient-to-t from-saluviaGreen/70
- Style: Clean product photography on white/neutral backgrounds

**Trust Indicators**: Placeholder logo areas for partner hospitals (Cases section) - can be replaced with actual client logos

## Animations (Minimal)

- **Framer Motion**: Only in Portfolio section for staggered card reveals (opacity + y-axis)
- **Hover states**: Scale transforms on cards (hover:scale-105) and buttons
- **Pulse effect**: WhatsApp button only (animate-ping on background circle)
- **No scroll-triggered animations** outside Portfolio - keep interface snappy and professional

## Accessibility

- Maintain WCAG AA contrast ratios (saluviaBeige #e8e6de on saluviaGreen #0f1e19 = sufficient)
- All interactive elements have clear focus states
- Icon buttons include aria-labels
- Form inputs with proper labels
- Semantic HTML structure (header, nav, section, footer)

## Responsive Breakpoints

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Stack grid columns on mobile (grid-cols-1)
- Adjust typography scale proportionally
- Maintain 20px minimum horizontal padding on mobile

## Section Structure (Top to Bottom)

1. **Navbar** - Sticky header with logo, navigation, CTA
2. **Hero** - Two-column with headline + feature card
3. **Credibilidade** - 4-column feature grid on saluviaGreen background
4. **Portfolio** - 3-column product category grid with images
5. **Diferenciais** - 4-column icon-based benefits
6. **Segmentos** - 3-column market segment cards
7. **Cases** - Testimonials + partner logos
8. **Contato** - Form + contact info two-column
9. **Rodape** - 4-column footer with links and legal

**Floating Elements**:
- WhatsApp button (bottom-right, always visible)
- Chat widget (toggleable, bottom-right above WhatsApp)
- Popup Oferta (triggered on page load or exit intent)

## Portuguese-Specific Considerations

- All UI text, button labels, and form fields in Portuguese
- Format phone numbers: +55 (61) 98141-4845
- Date/time formatting: Brazilian standard (DD/MM/YYYY, 24h)
- Currency: R$ (when pricing is added)
- Address format: Brazilian standard with CEP

---

**Key Insight**: This design balances institutional trust (dark green, structured layouts, professional typography) with commercial accessibility (gold accents, clear CTAs, friendly chat features) to serve both hospital procurement teams and private clinic owners effectively.