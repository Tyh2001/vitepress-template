import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Search from './components/Search.vue'
import './style/index.scss'

/**
 * 使用第三方组件库
 * 详情参考：https://github.com/FightingDesign/fighting-design
 */
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      /**
       * 导航栏插入搜索的输入框插槽
       * 更多插槽参考
       * 
       * https://github.com/vuejs/vitepress/blob/main/docs/guide/theme-introduction.md 
       */
      'nav-bar-content-before': () => h(Search)
    })
  },
  enhanceApp({ app }) {
    app.use(FightingDesign)
  }
}
