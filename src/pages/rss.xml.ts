import rss from "@astrojs/rss";
import { getCollection, type CollectionEntry } from "astro:content";
import type { APIRoute } from "astro";
import { SITE } from "../config";

type Post = CollectionEntry<"posts">;

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection("posts"))
    .filter((post: Post) => !post.data.draft)
    .sort((a: Post, b: Post) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: posts.map((post: Post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/${post.data.id}.html`,
    })),
  });
};
