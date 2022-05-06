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
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/KurumiWWW",
        },
      ],
    },
    nav: [
      { text: "文章", link: "/" },
      { text: "标签", link: "/tag/" },
    ],
    globalPagination: {
      prevText: "<",
      nextText: ">",
      lengthPerPage: "10",
      layout: "Pagination",
    },
  },
  directories: [
    {
      id: "post",
      dirname: "_posts",
      path: "/",
      title: "笔记",
    },
  ],
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  plugins: ["@vuepress/back-to-top"],
};
