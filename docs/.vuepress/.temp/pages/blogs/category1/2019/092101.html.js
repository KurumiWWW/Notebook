export const data = {
  "key": "v-2eb9b31a",
  "path": "/blogs/category1/2019/092101.html",
  "title": "second page in category1",
  "lang": "en-US",
  "frontmatter": {
    "title": "second page in category1",
    "date": "2019/09/21",
    "tags": [
      "tag2"
    ],
    "categories": [
      "category1"
    ]
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "blogs/category1/2019/092101.md"
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
