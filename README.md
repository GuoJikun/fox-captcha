# 图片验证码生成器

[demo](https://guojikun.github.io/fox-captcha/) [Github](https://github.com/GuoJikun/fox-captcha) [New issue](https://github.com/GuoJikun/fox-captcha/issues/new)

## 安装

```bash
yarn add fox-captcha
```

## 使用

```vue
<template>
    <fox-captcha></fox-captcha>
</template>
<script>
import Vue from "vue";
import FoxCaptcha from "fox-captcha";
Vue.use(FoxCaptcha);
</script>
```

## Props

| 属性   | 说明 | 类型   | 可选值         | 默认值 |
| ------ | ---- | ------ | -------------- | ------ |
| type   | 类型 | string | letter/digital | -      |
| width  | 类型 | number | -              | 100    |
| height | 类型 | number | -              | 30     |

## methods

| 方法名   | 说明               | 传入参数 | 返回值  |
| -------- | ------------------ | -------- | ------- |
| validate | 校验验证码是否正确 | string   | boolean |

## changeLog

### v1.0.1

feat：更新文档

### v1.0.0

feat：完成组件
