import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const posts = (await getCollection("posts", ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map(({ data }) => ({
      title: data.title,
      href: `/${data.id}.html`,
    }));

  const data = {
    generatedAt: new Date().toISOString(),
    total: posts.length,
    posts,
  };

  return new Response(JSON.stringify(data, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
