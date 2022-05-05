module.exports = {
  title: "KurumiW's Notebook",
  base: "/Notebook/",
  themeConfig: {
    lastUpdated: '最后更新于',
    sidebar: [
      {
        title: "首页",
        path: "/",
      },
      {
        title: "前端打包技术",
        children: [
          {
            title: "Webpack5.0 学习笔记",
            path: "/front-build/webpack-study.md"
          }
        ]
      }
    ],
  },
};
