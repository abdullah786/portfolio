# Abdullah Ahsan

Personal site for Abdullah Ahsan, a full stack developer in Frankfurt. The design and MDX blog come from the [Magic UI portfolio template](https://github.com/magicuidesign/portfolio) by [Dillion Verma](https://github.com/dillionverma), used under the MIT license in [`LICENSE`](./LICENSE).

Profile, skills, and projects live in one file: [`src/data/resume.tsx`](./src/data/resume.tsx).

## Run it locally

Node 18 or newer. This repo uses pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build
pnpm lint
```

## Edit the site

Open [`src/data/resume.tsx`](./src/data/resume.tsx) and change `DATA`.

- `name`, `headline`, and `hook` are the lines under the photo. `profileLinks` is the row under that. A link with `href: "TODO"` stays hidden.
- `skills` is the row of chips. Each entry is a name plus an icon component.
- `projects` is the project grid. `href` is the card link, `links` are the badges on the image, `technologies` are the tags, and `status` shows a label such as `In progress`. Leave `dates` empty when you do not have a real date.
- `contact.social` is the dock at the bottom of the page. A link appears there only when `navbar` is `true` and `url` is a real address.
- `work` and `education` are the job and school lists. `hackathons` stays empty, so that section stays off the homepage until you add a real entry. Do not add a date or number you cannot point at.

Search the file for `TODO` before you deploy. Each one is something still unknown (GitHub, screenshots, and a couple of project URLs).

The browser tab and social preview title are `SITE_TITLE` in the same file: `Abdullah Ahsan, Full stack developer`.

### Avatar and screenshots

Put images in `public/` and point at them from `resume.tsx`.

```tsx
avatarUrl: "/avatar.jpg",
```

```tsx
image: "/projects/resume-pure.png",
```

Until `image` is set, the card shows an empty placeholder. `video` can be a URL or a file in `public/` if you would rather show a clip than a still.

### Site URL

Metadata and Open Graph use `NEXT_PUBLIC_SITE_URL`. Copy [`.env.example`](./.env.example) to `.env.local` for local overrides:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Set the same variable in the host to the production domain, with no trailing slash. If it is unset, the site falls back to `http://localhost:3000`.

## Add a blog post

Posts are MDX files in [`content/`](./content). The index is `/blog`.

1. Add `content/your-slug.mdx`. The filename is the URL: `/blog/your-slug`.
2. Start with this frontmatter:

```mdx
---
title: "Post title"
publishedAt: "YYYY-MM-DD"
summary: "One sentence for the index and the social preview."
draft: false
---

Write the post in Markdown.
```

`publishedAt` has to be a real `YYYY-MM-DD` date or the byline stays as whatever string you typed. `draft: true` marks the post, keeps it out of search indexes, and is how [`content/hello-world.mdx`](./content/hello-world.mdx) is labeled. That file is a placeholder. Replace it or delete it when you publish something real.

`title`, `publishedAt`, and `summary` are required. `updatedAt`, `author`, `image`, and `draft` are optional. The schema is in [`content-collections.ts`](./content-collections.ts).

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel, import the repository. The framework preset is Next.js. pnpm is picked up from `pnpm-lock.yaml`.
3. Add an environment variable: `NEXT_PUBLIC_SITE_URL` = your production URL, no trailing slash.
4. Deploy. `pnpm build` runs `next build`, which compiles the MDX collection.

No database or auth is required.

## License

MIT. See [`LICENSE`](./LICENSE). Copyright (c) 2024 Dillion Verma. The original template is [magicuidesign/portfolio](https://github.com/magicuidesign/portfolio).
