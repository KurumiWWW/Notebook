import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-794c05a8","/blogs/Frontend/2021-01-01-webpack_study.html",{"title":"Webpack5.0 学习笔记"},["/blogs/Frontend/2021-01-01-webpack_study","/blogs/Frontend/2021-01-01-webpack_study.md"]],
  ["v-1f186c3a","/blogs/Frontend/2022-05-10-css_bem.html",{"title":"CSS BEM命名规范"},["/blogs/Frontend/2022-05-10-css_bem","/blogs/Frontend/2022-05-10-css_bem.md"]],
  ["v-2bdee662","/blogs/Frontend/2022-05-17-css_grid.html",{"title":"CSS Grid布局 学习笔记（编辑中）"},["/blogs/Frontend/2022-05-17-css_grid","/blogs/Frontend/2022-05-17-css_grid.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-2fdb19e1","/categories/Frontend/1/",{"title":""},["/categories/Frontend/1/index.html"]],
  ["v-8dac1032","/tags/CSS/1/",{"title":""},["/tags/CSS/1/index.html"]],
  ["v-6b013903","/tags/JavaScript/1/",{"title":""},["/tags/JavaScript/1/index.html"]],
  ["v-03908886","/tags/Webpack/1/",{"title":""},["/tags/Webpack/1/index.html"]],
  ["v-01560935","/timeline/",{"title":""},["/timeline/index.html"]],
  ["v-03d52fd3","/posts/1/",{"title":""},["/posts/1/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
