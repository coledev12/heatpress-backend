# HeatPress Backend

This is a custom order management and production workflow backend for an apparel business that handles heat-pressed garments like t-shirts, hoodies, and hats.

Built with:
- Node.js + Express
- Prisma ORM
- PostgreSQL
- Thunder Client for API testing

---

## 📦 Features

- Track customer orders from multiple sources (manual or from OMG)
- Organized workflow stages:
  1. Ordered
  2. Counted In
  3. Waiting on Design/Print
  4. Heat Press / Packaging
  5. Completed
- REST API for order creation, updates, and viewing
- Timestamped tracking for each stage

---

## 🔧 Setup

1. Clone the repo
2. Install dependencies:

```bash
npm install
```
3. Set up your `.env` file:

```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/heatpress?schema=public"
```

4. Generate the Prisma client:

```bash
npx prisma generate
```

5. Run migrations to set up your database:

```bash
npx prisma migrate dev --name init
```

6. Start the server:

```bash
npm run dev
```