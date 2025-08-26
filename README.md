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

## Color Pallete

| Color                          | Hex       | Usage                                                                                                      |
| ------------------------------ | --------- | ---------------------------------------------------------------------------------------------------------- |
| **Primary / Accent**           | `#ECB958` | Call-to-action buttons, highlights, links, headings. Warm, draws attention.                                |
| **Background / Base**          | `#B8CCD3` | Main background areas. Light and neutral to let content stand out.                                         |
| **Secondary / Cards / Panels** | `#687F87` | Panels, cards, secondary buttons, hover states. Medium contrast against light background.                  |
| **Text / Dark Elements**       | `#445249` | Primary text, footer text, headers, icons. Strong contrast against light background.                       |
| **Accent / Alerts / Special**  | `#7B4845` | Warnings, important info, subtle accents (e.g., border or underline). Muted enough to not clash with gold. |

### Example usage in Tailwind CSS

```js
/* Tailwind theme extension */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ECB958',
        secondary: '#687F87',
        accent: '#7B4845',
        background: '#B8CCD3',
        text: '#445249',
      },
    },
  },
};
```
