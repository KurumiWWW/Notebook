export const data = {
  "key": "v-17fd8582",
  "path": "/blogs/demo.html",
  "title": "Demo",
  "lang": "en-US",
  "frontmatter": {
    "title": "Demo",
    "date": "2022-05-09T00:00:00.000Z",
    "author": "KurumiW"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": null,
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "blogs/demo.md"
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
