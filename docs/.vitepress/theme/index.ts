import DefaultTheme from 'vitepress/theme'

import './style/index.scss'

/**
 * 使用第三方组件库
 * 详情参考：https://github.com/FightingDesign/fighting-design
 */
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FightingDesign)
  }
}
