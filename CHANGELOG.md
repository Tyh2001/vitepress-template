# 更新日志

## 2022-08-24

- 更新 `vitepress 1.0.0-alpha.10` 版本

## 2022-08-23

- 新增超链接 `target` 属性配置项 [target = "\_self" on nav links](https://github.com/vuejs/vitepress/discussions/1015#discussioncomment-3177860)

## 2022-08-20

- `vitepress` 最新版本 `1.0.0-alpha.9` 已经修复之前的打包问题
- 更新 `fighting-design` 引入
- 更新 `fighting-design` 版本

## 2022-08-19

目前 `vitepress` 的最新版本是 `1.0.0-alpha.8` 但是最新版本在构建的时候会报错，我已经向官方提交了 [issues](https://github.com/vuejs/vitepress/issues/1209)，等待解决中

经过测试，目前还是 `1.0.0-alpha.4` 是一个相对稳定的版本，暂无其它问题。对于 `1.0.0-alpha.5` 以上打包失败的问题，可以尝试使用管理员身份运行 `PowerShell` 可以实现正常打包。

所以 `vitepress-template` 暂时先使用 `1.0.0-alpha.4` 稳定版本提供使用

## 2022-08-18

- 更新了 `vitepress` 版本
- 更新主题目录别名，在 `vitepress 1.0.0-alpha.5` 版本前的别名为 `/@theme` 现跟新为 `@theme`，详情参考 [CHANGELOG.md](https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md)
- 优化了配置文件的位置，`vite.config.ts` 放在根目录是不生效的，必须放在 `/docs` 目录下才可以生效
- 修复了打包的报错信息：

```shell
This rule cannot come before a "@charset" rule

  <stdin>:2:0:
    2 │ .f-main[data-v-8221e4b8] {
      ╵ ^
```

在 `vite.config.ts` 中添加了如下配置：

```ts
css: {
  postcss: {
    plugins: [
      {
        postcssPlugin: 'internal:charset-removal',
        AtRule: {
          charset: (atRule) => {
            if (atRule.name === 'charset') {
              atRule.remove()
            }
          },
        },
      },
    ]
  }
}
```
