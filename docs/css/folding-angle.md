---
prev: 
    text: 毛玻璃
    link: ./ground-glass.md
---

# 折角效果

使用渐变技巧，我们很轻松的就实现了一个缺角效果，并添加上一个小三角。

<css-folding-angle :style="{ 'margin': '1rem auto' }" />

@[code{20-26} css](../.vuepress/components/css-folding-angle.vue)

然后发现这并不是我们想要的效果。因为它是沿着渐变轴进行度量的，而折角的2rem是按照长度和宽度进行度量，所以这里会不匹配。

已知正方形的对角长度为√2，为了保持其2rem的折角大小，我们将其渐变长度重新定义为2/√2≈1.414，这里取整数为1.5rem。
<css-folding-angle class="correct" :style="{ 'margin': '1rem auto' }" />

