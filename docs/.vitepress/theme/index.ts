import DefaultTheme from 'vitepress/theme'

// 使用第三方组件库
import FightingDesign from 'fighting-design'
import 'fighting-design/theme/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FightingDesign)
  }
}
