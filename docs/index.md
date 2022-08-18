---
layout: home
title: vitepress-template
---

<Home />

<script setup>
/**
 * 这里路径 @theme 可以直接指向 .vitepress/theme 目录
 * 
 * 注意：在 vitepress 1.0.0-alpha.6 版本前的别名为 /@theme
 * 1.0.0-alpha.6 版本以后的别名改为 @theme
 * 详情参考：https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md
 * 
 * 2022-08-18 1.0.0-alpha.5 以上版本打包有问题
 */
import Home from '@theme/Home.vue'
</script>
