import { getCollection, type CollectionEntry } from "astro:content";

type Moment = CollectionEntry<"moments">;

// 统一判断 Moment 是否公开, 避免列表和标签页出现不同的 draft 规则
export const isPublished = ({ data }: Moment) => !data.draft;

// 默认按发布时间倒序排列, 保证各 Moments 入口顺序一致
export const byDateDesc = (a: Moment, b: Moment) => b.data.date.valueOf() - a.data.date.valueOf();

// 返回全部公开 Moments, 分页和标签过滤由具体页面处理
export async function getPublishedMoments() {
  return (await getCollection("moments", isPublished)).sort(byDateDesc);
}
