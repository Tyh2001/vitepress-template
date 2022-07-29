import DefaultTheme from 'vitepress/theme'

/**
 * 使用第三方组件库
 * 组件库部分功能尚未完善，仅供测试使用
 * 详情参考：https://github.com/FightingDesign/fighting-design
 */
// import FightingDesign from 'fighting-design'
// import 'fighting-design/theme/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.use(FightingDesign)
  }
}
