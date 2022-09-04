import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'

/**
 * 参考：https://vitepress.vuejs.org/config/app-configs.html
 * 
 * 修改这里需要重启项目才可以生效
 */

const config = defineConfig({
  title: 'vitepress-template',
  lastUpdated: true,

  themeConfig: {
    lastUpdatedText: '最后更新时间',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Tyh2001/vitepress-template'
      }
    ],
    nav,
    sidebar
  }
})

export default config
