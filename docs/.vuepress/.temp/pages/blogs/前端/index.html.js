export const data = {
  "key": "v-0461423d",
  "path": "/blogs/%E5%89%8D%E7%AB%AF/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "modules": [
      "BannerBrand",
      "Blog"
    ],
    "bannerBrand": {
      "bgImageStyle": {
        "height": "350px"
      },
      "heroText": "KurumiW's Notebook",
      "tagline": "What Error?"
    },
    "blog": {
      "socialLinks": [
        {
          "icon": "BrandGithub",
          "link": "https://github.com/KurumiWWW"
        }
      ]
    }
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "blogs/前端/index.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
