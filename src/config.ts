// 网站基础信息
export const SITE = {
  author: "honeok", // 作者名称 用于首页标题
  title: "我不是611", // 网站名称 用于标签页和 RSS
  description: "一个无趣者的自我放逐之地", // 网站描述
  github: "https://github.com/honeok", // GitHub 主页
} as const;

// 备案信息 设置为 null 时不显示
export const FILING: { label: string; href: string } | null = {
  label: "萌ICP备20256611号",
  href: "https://icp.gov.moe/?keyword=20256611",
};

// 网站统计 设置为 null 时不加载
export const ANALYTICS: { src: string; websiteId: string } | null = {
  src: "https://u.honeok.com/script.js",
  websiteId: "b630bd25-ae61-4321-97bb-017bbbf1eb35",
};

// 左侧导航
export const NAV_ITEMS = [
  { href: "/", label: "Blog" },
  { href: "/tags", label: "Tags" },
  { href: "/images", label: "Images" },
  { href: "/about", label: "About" },
] as const;
