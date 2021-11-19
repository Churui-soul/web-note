---
prev: 
    text: 梯形标签页
    link: ./trapezoid.md
---

# 动态饼图

## 1. 底图准备
创建一个元素，左侧设置为未激活颜色，右侧为激活颜色，设置为圆形。

这时候我们就会得到一个50%占比的饼图

<css-pie :style="{ 'margin': '0 auto' }"/>

@[code{6-10} scss](../.vuepress/components/css-pie.vue)

## 2. 设置遮挡物
添加一个遮挡物，并将其设置为元素的一半的宽度，置于右侧，挡住我们之前设置的50%占比。

<css-pie class="mask" :style="{ 'margin': '0 auto' }"/>

@[code{12-20} scss](../.vuepress/components/css-pie.vue)

这时候当我们旋转该遮挡物的时候，随着挡住的范围越来越小，我们饼图的占比就会越来越多。

例如我们想得到一个占比20%，即设置72deg（360*0.2），这里我们设置为0.2turn会更好理解一些。
<css-pie class="mask mask-rotate2" style="margin: 0 auto;"/>

这里省去了mask的其他样式代码，因为它和之前没有变化。
``` scss
.mask::before {
    transform: rotate(.2turn);
}
```

## 3. 添加动画
因为我们的遮挡物颜色是和背景色一样的，当其旋转度数超过180deg，达到216deg（60%）的时候我们会发现这并不是想要的效果。

<css-pie class="mask mask-rotate6" style="margin: 0 auto;"/>

你可以检查一下上方的元素，会发现这是理所应当的。是的，我们的遮挡物旋转超过50%的时候就会挡住我们之前已经露出的占比。

这时候我们需要在其旋转达到50%的时候改变遮挡物的颜色，并让遮罩物其瞬间回到0%的位置，然后让其保持该颜色旋转50%。

<css-pie class="mask mask-animation" style="margin: 0 auto;"/>

@[code{28-40} scss](../.vuepress/components/css-pie.vue)

# 静态饼图
::: tip animation-delay
“一个负的延时值是合法的。与 0s 的延时类似，它意味着动画会立即
开始播放，但会自动前进到延时值的绝对值处，就好像动画在过去已经播
放了指定的时间一样。因此实际效果就是动画跳过指定时间而从中间开始
播放了。”

—— CSS 动画（第一版）（http://w3.org/TR/css-animations/
#animation-delay） 
:::
我们可以借助animation-delay特性，然后将动画置为停止状态就可以获取到静态的饼图了。

<css-pie class="mask mask-animation mask-animation-paused" style="margin: 0 auto;animation-delay: -4s"/>

