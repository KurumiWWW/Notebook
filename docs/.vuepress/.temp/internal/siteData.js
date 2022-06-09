export const siteData = {
  "base": "/Notebook/",
  "lang": "en-US",
  "title": "KurumiW's Notebook",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "shortcut icon",
        "href": "/Notebook/logo.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
