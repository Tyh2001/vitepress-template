import TableContainer from './table'
import type MarkdownIt from 'markdown-it'

export const mdPlugin = (md: MarkdownIt) => {
  md.use(TableContainer)
}
