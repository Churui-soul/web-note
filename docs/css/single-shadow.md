---
prev: 
    text: 简单的饼图
    link: ./pie-svg.md
---
::: tip 注意
投影并不是元素叠加，置于指定元素后方，而是裁剪掉与之重叠部分。使用透明或半透明元素即可测试出。
:::

## 下方投影
当投影**扩张半径**设置为负值等同于**模糊半径**时，我们的投影就会等同于元素本身，这时除非使用投影偏移，否则投影将不会产生。

<css-single-shadow class="shadow-bottom" :style="{ 'margin': '1rem auto' }"/>

这就等同于我们在下方设置了一个（8px - 4px）4px的投影。
@[code{13-15} scss](../.vuepress/components/css-single-shadow.vue)

## 相邻边投影
<css-single-shadow class="shadow-right-bottom" :style="{ 'margin': '1rem auto' }"/>

因为我们需要隐藏两个边的投影，所以这里我们需要设置两个偏移量。

关于**扩张半径**设置为**模糊半径**的一半取反是为了更好看一些，这里可以根据设计师的图纸进行调整。
@[code{17-19} scss](../.vuepress/components/css-single-shadow.vue)

## 双侧投影
<css-single-shadow class="shadow-horizontal" :style="{ 'margin': '1rem auto' }"/>

我们并不能设置指定方向的**扩张半径**，所以这里我们使用两个阴影来代替。
@[code{21-24} scss](../.vuepress/components/css-single-shadow.vue)
