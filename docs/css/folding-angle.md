---
prev: 
    text: 毛玻璃
    link: ./ground-glass.md
next: ./insert-newline.md
---

# 折角效果

使用渐变技巧，我们很轻松的就实现了一个缺角效果，并添加上一个小三角。

<css-folding-angle class="container" :style="{ 'margin': '1rem auto' }" />

@[code{20-28} css](../.vuepress/components/css-folding-angle.vue)

嗯、屌爆的效果。因为它是沿着渐变轴进行度量的，而折角的2rem是按照长度和宽度进行度量，所以这里会不匹配。

已知正方形的对角长度为√2，为了保持其2rem的折角大小，我们将其渐变长度重新定义为2/√2≈1.414，这里取整数为1.5rem。
<css-folding-angle class="container correct" :style="{ 'margin': '1rem auto' }" />

@[code{31-33} css](../.vuepress/components/css-folding-angle.vue)

## 其他角度折角
这里我们设置一个旋转角度为150°的缺角。

这时的缺角的三个角度为 30°（根据180 - 150得出），60° ，90°。

渐变轴长度为1.5rem。从直角点出发，将当前缺角三角形分为两个直角三角形。

偏上方的三角形这时已知一条边为1.5rem。

根据计算机得出: sin30° = 1/2，cos30° = √3/2

sin30° = 1/2 = 1.5/x => x = 1.5 * 2 => x = 3

cos30° = √3/2 = 1.5/y => y = 1.5 * 2 / √3 => y = 1.73

<css-folding-angle class="container angle150" :style="{ 'margin': '1rem auto' }" />

@[code{37-39} css](../.vuepress/components/css-folding-angle.vue)

仔细观察会发现，这里创造除了一个现实中怎么折都折不出来的图形。

## 方案二 - 伪元素

选择伪元素方案将其Y轴翻转一下。

根据勾股定理rotateZ = 180 - 60（y轴角度） = 120。
<css-folding-angle class="container angle150-before" :style="{ 'margin': '1rem auto' }" />

@[code{44-53} css](../.vuepress/components/css-folding-angle.vue)

再为其添加圆角与阴影
<css-folding-angle class="container angle150-before-level2" :style="{ 'margin': '1rem auto' }" />

其他代码不变
@[code{56-62} css](../.vuepress/components/css-folding-angle.vue)