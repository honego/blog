import rss from "@astrojs/rss";
import { getCollection, type CollectionEntry } from "astro:content";
import type { APIRoute } from "astro";
import { SITE } from "../config";

type Thought = CollectionEntry<"thoughts">;

export const GET: APIRoute = async (context) => {
  const thoughts = (await getCollection("thoughts"))
    .filter((thought: Thought) => !thought.data.draft)
    .sort((a: Thought, b: Thought) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: `${SITE.title} — Thoughts`,
    description: SITE.description,
    site: context.site ?? "https://blog.honeok.com",
    items: thoughts.map((thought: Thought) => ({
      title: thought.data.title,
      description: thought.data.description,
      pubDate: thought.data.date,
      link: `/thoughts/${thought.id}/`,
    })),
  });
};
