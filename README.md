# StarzHealth Web

This repository contains the full website design and assets for **StarzHealth TPA Services LLC**.

## 🔗 Live Demo

(Not deployed yet – local setup required)

## 📁 Project Structure

- `/public`
  - **/doctors**: Doctor images (male/female placeholders)
  - **/forms**: Downloadable claim and reimbursement forms (PDF)
  - **/insurance**: Insurance provider logos (placeholder)
  - **/providers**: Provider logos (placeholder)
  - **/social**: Social media icons
  - `starzhealth.png`: Main company logo

- `/src/app`
  - `doctors/`: Find-a-Doctor pages
  - `providers/`: Find-a-Provider pages
  - `resources/`: Patient resources (FAQ, forms, insurance)
  - `services/`: Telehealth and other service pages
  - `auth/`: Login, Register, Forgot Password
  - `dashboard/`: Member dashboard pages (appointments, billing, medical records)

- `/src/components`: Reusable components (Card, Button, Modal, Header, Footer, etc.)

## ✅ Features

- **Responsive Design**
- Fully functional **Doctor & Provider Finder**
- Downloadable **Claim & Reimbursement Forms**
- Patient resources (FAQs, Insurance info)
- Modular structure (Next.js + Tailwind CSS)

## 🛠 How to Run Locally

```bash
git clone https://github.com/sachindxb/starzhealth-web.git
cd starzhealth-web
npm install
npm run dev




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
