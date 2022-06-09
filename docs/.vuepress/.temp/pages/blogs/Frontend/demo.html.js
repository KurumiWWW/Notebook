export const data = {
  "key": "v-cfca8a20",
  "path": "/blogs/Frontend/demo.html",
  "title": "Demo",
  "lang": "en-US",
  "frontmatter": {
    "title": "Demo"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "createdTime": null,
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "blogs/Frontend/demo.md"
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
