# Beneficial Group - Modern Diversified Platform

A multi-faceted, mobile-first web platform designed to showcase and manage diversified operations in mining, transport, forestry, and agriculture across Cameroon and beyond.

## 🚀 Features

- **Multi-Language Support**: English and French with seamless language switching
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Core Services**: Mining, Transport, Forestry, and Agriculture service pages
- **Project Showcase**: Detailed pages for flagship initiatives
- **Contact System**: Smart contact form with department routing
- **WhatsApp Integration**: Direct communication via floating chat button
- **Modern UI**: Built with Tailwind CSS and Font Awesome icons

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Internationalization**: next-intl
- **Icons**: Font Awesome
- **Fonts**: Inter and Playfair Display (Google Fonts)
- **Package Manager**: pnpm

## 📁 Project Structure

```
src/
├── app/
│   └── [locale]/           # Internationalized routes
│       ├── about/          # About page
│       ├── services/       # Services pages
│       │   ├── mining/
│       │   ├── transport/
│       │   ├── forestry/
│       │   └── agriculture/
│       ├── projects/       # Projects showcase
│       ├── contact/        # Contact page
│       ├── layout.tsx      # Root layout
│       └── page.tsx        # Homepage
├── components/
│   └── common/            # Reusable components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── FeaturedServices.tsx
│       ├── Impact.tsx
│       ├── ProjectsShowcase.tsx
│       ├── FlashInfo.tsx
│       ├── Partners.tsx
│       └── WhatsAppButton.tsx
├── lib/                   # Utility functions
├── types/                 # TypeScript types
└── config/               # Configuration files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd beneficial-group
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🌍 Internationalization

The application supports English and French languages:

- **English**: `/en`
- **French**: `/fr`

Language switching is available via the navbar button.

## 📱 Pages

### Homepage (`/`)

- Hero section with call-to-action
- Featured services overview
- Impact statistics
- Projects showcase
- Flash information
- Partners section

### About (`/about`)

- CEO welcome message
- Company vision
- Management team profiles

### Services (`/services`)

- Overview of all services
- Individual service pages:
  - Mining (`/services/mining`)
  - Transport (`/services/transport`)
  - Forestry (`/services/forestry`)
  - Agriculture (`/services/agriculture`)

### Projects (`/projects`)

- Sustainable Bamboo Cultivation
- Toothpick Production Initiative

### Contact (`/contact`)

- Contact information
- Smart contact form with department routing
- WhatsApp integration

## 🎨 Design System

### Colors

- Primary: Green (`#059669`)
- Secondary: Gray scale
- Accent: White and black

### Typography

- **Inter**: Body text and UI elements
- **Playfair Display**: Headings and display text

### Components

- Responsive navigation with dropdown menus
- Card-based layouts
- Form components with validation
- Floating WhatsApp button

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Tailwind Configuration

Custom fonts and colors are configured in `tailwind.config.ts`.

## 📦 Deployment

### Vercel (Recommended)

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-next-intl&project-name=with-next-intl&repository-name=with-next-intl&redirect-url=https://github.com/vercel/next.js/tree/canary/examples/with-next-intl&demo-title=next-intl%20Example&demo-description=Internationalization%20example%20using%20next-intl&demo-url=https://with-next-intl.vercel.app&demo-image=https://with-next-intl.vercel.app/og.png)

```bash
npx create-next-app@latest --example with-next-intl with-next-intl-app
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary to Beneficial Group.

## 📞 Contact

- **Phone**: +237 695 184 738
- **Email**: ebenebot1978@gmail.com
- **Address**: Kumba 1, MEME Division, South West Region

---

Built with ❤️ for Beneficial Group
