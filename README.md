# Esther Tran — Portfolio

My personal software engineering portfolio, built with Next.js 16, React 19, and Tailwind CSS v4.

**Live site:** [esthertran.dev](https://esthertran.dev)

The site is a single page (`app/page.tsx`) made up of these sections:

- **Hero**: introduction and links
- **Education**
- **Skills**: tech stack with icons
- **Projects**: featured projects with GitHub and live demo links, plus a detail modal for each one
  - [MaplePath AI](https://github.com/estherdev03/MaplePath) ([demo](https://maple-path-black.vercel.app))
  - [Pomodoro App](https://github.com/estherdev03/pomodoro-app) ([demo](https://pomodoro-murex-beta.vercel.app))
  - [Canva Clone (MERN Canva)](https://github.com/estherdev03/mern-canva) ([demo](https://artboard-navy.vercel.app))
- **Principles**: how I approach engineering work
- **Contact**: a form that sends messages through [Formspree](https://formspree.io)

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Server Actions)
- [React 19](https://react.dev) and TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [react-icons](https://react-icons.github.io/react-icons/) and [@dev.icons/react](https://www.npmjs.com/package/@dev.icons/react) for icons
- [react-toastify](https://fkhadra.github.io/react-toastify/) for form notifications
- `next/font`: Geist, Geist Mono, and Plus Jakarta Sans

## Getting Started

You'll need Node.js 20 or later.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## Project Structure

```
app/
├── components/       # Section and UI components
│   └── actions.ts    # Server action for the contact form
├── globals.css       # Tailwind and global styles
├── layout.tsx        # Root layout, fonts, metadata, toast container
└── page.tsx          # Home page that assembles the sections
```

## Contact Form

The contact form calls the `sendEmail` server action in `app/components/actions.ts`. The action checks that name, email, and message are filled in, then posts the submission to Formspree. Company is optional. If you fork this project, swap the Formspree endpoint in `actions.ts` for your own form ID.

## Deployment

The site is designed to deploy on [Vercel](https://vercel.com). Import the repository and use the default Next.js settings. You don't need to set any environment variables.
