# company-website
This is QuantEdge Limited's Website.

# structure
Company-Website/
│
├── prisma/                       # Prisma (ORM) setup
│   ├── schema.prisma              # DB schema (tables, models)
│   └── migrations/                # Auto-generated DB migrations
│
├── src/
│   ├── app/                       # Next.js App Router (if using App Router)
│   │   ├── layout.tsx             # Global layout
│   │   ├── page.tsx               # Homepage
│   │   ├── contact/               # Contact page
│   │   │   ├── page.tsx           # Contact form UI
│   │   │   └── ContactForm.tsx    # Reusable form component
│   │   └── api/                   # API routes
│   │       └── contact/route.ts   # POST endpoint to save client details
│   │
│   ├── components/                # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── UI/                    # Buttons, Inputs, etc.
│   │
│   ├── lib/                       # Helper functions & configs
│   │   ├── db.ts                  # Prisma client (MySQL connection)
│   │   └── utils.ts               # Other helper utilities
│   │
│   ├── styles/                    # Global and Tailwind styles
│   │   └── globals.css
│   │
│   └── types/                     # TypeScript types/interfaces
│       └── contact.d.ts
│
├── .env                           # Environment variables (DB credentials, etc.)
├── package.json
├── tailwind.config.js
├── tsconfig.json                  # TypeScript config
└── README.md
