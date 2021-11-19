---
prev: 
    text: 切角效果
    link: ./chamfer.md
next: 
    text: 简单的饼图
    link: ./pie.md
---

# 梯形标签页
::: tip perspective
CSS 属性 [perspective](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective)指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。 z>0 的三维元素比正常大，而 z<0 时则比正常小，大小程度由该属性的值决定。
:::

<css-trapezoid class="trapezoid"/>

@[code{6-26} scss{17-18}](../.vuepress/components/css-trapezoid.vue)

1. scaleY：解决3d透视后高度变矮问题。

2. transform-origin：解决偏移后宽度变宽问题。

<css-trapezoid class="trapezoid trapezoid-left"/>

@[code{28-33} scss{3-4}](../.vuepress/components/css-trapezoid.vue)

还可以通过调整transform-origin来改变斜角方向

# 示例
<css-trapezoid-example />

