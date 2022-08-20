import DefaultTheme from 'vitepress/theme'

/**
 * 使用第三方组件库
 * 详情参考：https://github.com/FightingDesign/fighting-design
 */
import FightingDesign from 'fighting-design/es/index.es.mjs'
import 'fighting-design/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FightingDesign)
  }
}
