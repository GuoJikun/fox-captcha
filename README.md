# captcha

图片验证码生成器
[demo](guojikun.github.io/) [Github New issue](https://github.com/GuoJikun/fox-captcha/issues/new)

## 安装

```bash
npm i fox-captcha
#or
yarn add fox-captcha
#or
pnpm i fox-captcha
```

## 使用

```vue
<template>
    <fox-captcha></fox-captcha>
</template>

<script>
import { createApp } from "vue";
import FoxCaptcha from "fox-captcha";
const createApp().use(FoxCaptcha);
</script>
```

## Props

| 属性   | 说明        | 类型           | 可选值  | 默认值 |
| ------ | ----------- | -------------- | ------- | ------ |
| type   | 类型 string | letter/digital | digital |
| width  | 类型        | number         | -       | 100    |
| height | 类型        | number         | -       | 30     |

## methods

| 方法名   | 说明               | 传入参数 | 返回值  |
| -------- | ------------------ | -------- | ------- |
| validate | 校验验证码是否正确 | string   | boolean |

## changeLog

### v2.1.0

feat：优化文档

### v2.0.0

feat：增加 vue3 支持

### v1.0.1

feat：更新文档

### v1.0.0

feat：完成组件
