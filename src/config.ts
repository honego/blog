// 网站基础信息
export const SITE = {
  author: "honeok", // 作者名称 用于首页标题
  title: "我不是611", // 网站名称 用于标签页和 RSS
  description: "一个无趣者的自我放逐之地", // 网站描述
  github: "https://github.com/honeok", // GitHub 主页
} as const;

// 左侧导航
export const NAV_ITEMS = [
  { href: "/", label: "About" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/projects", label: "Projects" },
  { href: "/images", label: "Images" },
] as const;
