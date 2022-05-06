module.exports = {
  title: "KurumiW's Notebook",
  base: "/Notebook/",
  theme: "@vuepress/theme-blog",
  configureWebpack: {
    resolve: {
      alias: {
        "@": "assets",
      },
    },
  },
  themeConfig: {
    nav: [{ text: "GitHub", link: "https://github.com/KurumiWWW" }],
  },
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
};
