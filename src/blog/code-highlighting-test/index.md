---
id: 2
title: Code highlighting test
description: A visual check for common fenced code blocks.
date: 2026-09-05
tags:
  - nginx
---

This page checks syntax highlighting, spacing, overflow, and the shared monospace font across common code languages.

## Nginx

```nginx
server {
  listen 443 ssl http2;
  server_name blog.honeok.com;

  location / {
    try_files $uri $uri/ =404;
  }
}
```

## Shell

```shell
pnpm install
pnpm build
pnpm dlx wrangler@latest deploy
```

## Bash

```bash
#!/usr/bin/env bash

set -euo pipefail

for file in dist/_astro/*; do
  printf '%s\n' "$file"
done
```

## JavaScript

```js
const posts = await getCollection("posts");

const published = posts.filter(({ data }) => !data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
```

## TypeScript

```ts
type Post = {
  title: string;
  description: string;
  publishedAt: Date;
};

function formatPost(post: Post): string {
  return `${post.title} — ${post.publishedAt.toISOString()}`;
}
```

## HTML

```html
<article aria-labelledby="post-title">
  <h1 id="post-title">A small, durable website</h1>
  <p>Static HTML stays fast and easy to cache.</p>
</article>
```

## CSS

```css
:root {
  color-scheme: only light;
  --content-width: 42rem;
}

.prose pre {
  max-width: 100%;
  overflow-x: auto;
}
```

## JSON

```json
{
  "name": "hlog",
  "private": true,
  "scripts": {
    "build": "astro check && astro build"
  }
}
```

## YAML

```yaml
name: Deploy
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
```

## TOML

```toml
name = "hlog"
compatibility_date = "2026-09-05"

[assets]
directory = "./dist"
not_found_handling = "404-page"
```

## Astro

```astro
---
const title = "Hello, Astro";
---

<main>
  <h1>{title}</h1>
</main>
```

## Markdown

```md
## A heading

Write with **emphasis**, `inline code`, and [a link](https://blog.honeok.com).

- one
- two
- three
```

## SQL

```sql
select id, title, published_at
from posts
where draft = false
order by published_at desc;
```

## Dockerfile

```dockerfile
FROM node:24-alpine AS build
WORKDIR /app
COPY . .
RUN corepack enable && pnpm install --frozen-lockfile && pnpm build
```

## PowerShell

```powershell
$ErrorActionPreference = "Stop"

pnpm install --frozen-lockfile
pnpm build
```

## Plain text

```text
No syntax grammar is required for plain text.
The same code font and spacing still apply.
```
