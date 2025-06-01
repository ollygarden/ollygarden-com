# OllyGarden Website

The official website for OllyGarden.

## Development

Install [bun](https://bun.sh/docs/installation) and run:

```sh
bun install
bun run dev
```

## Build

```sh
bun run build
```

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- Supabase (for contact form)

## Deployment

The site is deployed to Netlify. Builds are triggered automatically on push to `main`.

Build configuration:
- Build command: `bun run build`
- Publish directory: `dist`

## CI

GitHub Actions runs linting and builds on every push and PR to `main`.
