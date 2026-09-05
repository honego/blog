---
id: 1
title: Building this site
description: A minimal Astro writing setup inspired by two very different personal sites.
date: 2026-09-04
tags: []
---

This site combines two ideas: the quiet, narrow reading rhythm of [shud.in](https://shud.in) and the straightforward content model of [Astro Nano](https://github.com/markhorn-dev/astro-nano).

The visual layer is rebuilt with native Astro components and ordinary CSS. The writing stays in Markdown or MDX, collected and typed at build time. There is no React application hiding underneath the page and no server process required to read it.

## The useful constraint

Keeping the site static makes the architecture pleasantly small:

- content lives beside the code;
- every page is generated during the build;
- the browser receives HTML and CSS by default;
- Cloudflare only needs to serve the finished `dist` directory.

That leaves more room for the details that readers actually notice: typography, spacing, navigation, and a stable URL for every note.
