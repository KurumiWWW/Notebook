export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "modules": [
      "BannerBrand",
      "Blog"
    ],
    "bannerBrand": {
      "bgImage": "/bg.jpg",
      "bgImageStyle": {
        "height": "450px",
        "color": "#fff"
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
  "git": {
    "createdTime": 1651738353000,
    "updatedTime": 1651825341000,
    "contributors": [
      {
        "name": "kurumiwww",
        "email": "2209278137@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "README.md"
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
