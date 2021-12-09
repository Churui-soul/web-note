---
prev: 
    text: 染色效果
    link: ./dyeing.md
next: 
    text: 折角效果
    link: ./folding-angle.md
---

# 毛玻璃

<css-ground-glass :style="{ 'margin': '1rem auto' }" />

其主要核心是使用blur()将背景图片进行模糊处理。

因为blur()不但会模糊背景还会将元素当中的内容模糊，所以采用老方法，伪元素来处理。

然后将伪元素置为其主元素后方`z-index: -1`，将主元素设置为想要的半透明颜色。

::: tip 注意
模糊半效果在中心处是很完美的，在边缘处会逐渐消退。

因为各浏览器模糊算法可能存在差异，为了得到更好的效果我们可以通过负的margin来扩大模糊元素的大小，扩大值为`blur()`中传入的值。
:::

这里是构成上方效果的全部代码
@[code vue](../.vuepress/components/css-ground-glass.vue)
