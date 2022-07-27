import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'

/**
 * 参考：https://vitepress.vuejs.org/config/app-configs.html
 * 
 * 修改这里需要重启项目才可以生效
 */

const config = defineConfig({
  title: 'hello',

  themeConfig: {
    nav,
    sidebar
  }
})

export default config
