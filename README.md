# AI Dashboard Frontend

A modern analytics dashboard built with React, Typescript, Vite, Tailwind CSS, and Recharts. Includes authentication via Google OAuth and fake integration with Amazon and Shopify for seller analytics, and a simple interactive chatbot. This project is just an UI demo and not a production-ready application.

## Deployment
It is deployed at vercel
https://skin-elements-assignment.vercel.app/

## Features

- Interactive charts (bar, area, pie, radial) using Recharts
- Amazon and Shopify integration forms
- Protected routes and authentication (Google OAuth)
- Product analytics and profit breakdowns
- Simple interactive chatbot (dummy responses)
- Responsive, modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
$ git clone https://github.com/ashutosh44ks/skin-elements-assignment.git
$ cd skin-elements-assignment

# Install dependencies
$ npm install
# or
yarn install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

- `VITE_G_CLIENT_ID`: Google OAuth Client ID

### Running the App

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` (or as shown in your terminal).

## Project Structure

```
├── public/                # Static assets
├── src/
│   ├── components/        # UI and chart components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and constants
│   ├── pages/             # Route-based pages
│   ├── index.css          # Tailwind and custom styles
│   └── App.tsx            # Main app entry
├── .env.example           # Example environment variables
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code

## License

MIT

---

Built by [ashutosh44ks](https://github.com/ashutosh44ks)
