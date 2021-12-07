---
prev: 
    text: 简单的饼图
    link: ./pie.md
---
# 简单的饼图-SVG
为了更好的控制饼图的百分比，这里我门将圆的周长设置为100

圆的半径 = 100/2πr ≈ 15.91 这里我们取整为16

@[code{2-4} html](../.vuepress/components/css-pie-svg.vue)

<css-pie-svg :style="{ 'margin': '1rem auto' }"/>

@[code{8-24} scss](../.vuepress/components/css-pie-svg.vue)

## 添加动画
<css-pie-svg class="rotate-circle" :style="{ 'margin': '1rem auto' }"/>

@[code{26-39} scss](../.vuepress/components/css-pie-svg.vue)

