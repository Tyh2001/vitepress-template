import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { mdPlugin } from './config/plugins'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

/**
 * 更多配置项参考：https://vitepress.vuejs.org/config/app-configs.html
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
  },
  markdown: {
    config: (md) => {
      // md.use(demoBlockPlugin)
      // md.use(mdPlugin)
    }
  }
})

export default config
