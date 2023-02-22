import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { PluginTable } from './plugin'
import type MarkdownIt from 'markdown-it'

/**
 * 更多配置项参考：
 * 
 * @see app-configs https://vitepress.vuejs.org/config/app-configs.html
 */
export default defineConfig({
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
    config: (md: MarkdownIt): void => {
      md.use(PluginTable)
    }
  }
})
