import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  title: "KurumiW's Notebook",
  base: "/Notebook/",
  theme: "reco",
  themeConfig: {
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "KurumiWWW",
    authorAvatar: "https://avatars.githubusercontent.com/u/58627883?v=4",
    navbar: [
      { text: "首页", link: "/" },
      { text: "分类", link: "/categories/qianduan/1/" },
      { text: "标签", link: "/tags/JavaScript/1/" },
    ],
    valineConfig: {
      appId: "pMlgDD4QWaOk2wSW3FT6s7Ko-gzGzoHsz",
      appKey: "YTKTTrwfjtPzzgunSo0rh85H",
      placeholder: "填写邮箱可以收到回复提醒哦！",
      // verify: true, // 验证码服务
      // notify: true,
      // recordIP: true,
      // hideComments: true // 隐藏评论
    },
  },
  // debug: true,
});
