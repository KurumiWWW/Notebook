module.exports = {
  title: "KurumiW's Notebook",
  base: "/Notebook/",
  theme: "reco",
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
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
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
