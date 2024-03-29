import comp from "C:/Users/Admin/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/second copy 2.html.vue"
const data = JSON.parse("{\"path\":\"/second%20copy%202.html\",\"title\":\"Components\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"second copy 2.md\"}")
export { comp, data }

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
