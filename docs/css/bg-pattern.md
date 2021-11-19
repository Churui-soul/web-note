---
prev: 
    text: 条纹背景
    link: ./bg-stripe.md
next: 
    text: 伪随机背景
    link: ./bg-random.md
---

# 背景图案
::: tip 前置知识
[linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient())、
[radial-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient())、
[repeating-conic-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-conic-gradient())
:::
::: tip 提示
如果要统计你的 CSS 代码
的文件体积，可以把代码粘贴到
bytesizematters.com。
:::

## 网格蓝图

<bg-pattern class-name="blueprint"/>

@[code{25-40} scss](../.vuepress/components/bg-pattern.vue)

## 波点
<bg-pattern class-name="polka"/>

::: tip 提示
[var()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var())函数可以代替元素中任何属性中的值的任何部分。var()函数不能作为属性名、选择器或者其他除了属性值之外的值。
:::
@[code{42-54} scss](../.vuepress/components/bg-pattern.vue)

## 棋盘
<bg-pattern class-name="checkerboard-svg"/>

@[code{56-68} scss](../.vuepress/components/bg-pattern.vue)

## 棋盘-SVG
@[code{70-79} scss](../.vuepress/components/bg-pattern.vue)

## 角向渐变
<bg-pattern class-name="angular-gradient"/>

@[code{81-83} scss](../.vuepress/components/bg-pattern.vue)

## 大佬的图库
[Lea Verou](https://lea.verou.me/about/)：[CSS3图案库](https://lea.verou.me/css3patterns)、[svg图案库](https://philbit.com/svgpatterns)

[Bennett Feely](https://bennettfeely.com/)：[CSS3图案库](http://bennettfeely.com/gradients)