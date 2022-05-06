module.exports = {
  title: "KurumiW's Notebook",
  base: "/Notebook/",
  theme: "reco",
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/png', href: "/logo.png" }]
  ],
  themeConfig: {
    authorAvatar: 'https://avatars.githubusercontent.com/u/58627883?v=4',
    noFoundPageByTencent: false,
    type: 'blog',
    subSidebar: 'auto',
    nav: [{
      text: "KurumiWWW",
      icon: "reco-github",
      link: "https://github.com/KurumiWWW"
    }],
    blogConfig: {
      category: {
        text: "分类"
      },
      tag: {
        text: "标签"
      },
    },
    friendLink: [
      {
        title: 'ForteScarlet',
        desc: '接口小子',
        logo: "https://avatars.githubusercontent.com/u/40045247?v=4",
        link: 'https://github.com/ForteScarlet'
      },
    ]
  },
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  plugins: ["@vuepress/back-to-top"],
};
