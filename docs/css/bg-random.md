---
prev: 
    text: 背景图案
    link: ./bg-pattern.md
next: 
    text: 连续的图像边框
    link: ./bg-border-continuity.md
---

# 伪随机背景
::: tip 实现思路采用蝉原则
“当你注意到一个有辨识度的特征（比如，木纹上的节疤）在以固定
的规律循环重复时，那它试图营造的自然随机性就会立刻崩塌。”
——Alex Walker，[《蝉原则对网页设计的重要性》](http://sitepoint.com/the-cicada-principle-and-why-it-matters-to-web-designers)
:::

<bg-random />

@[code{12-22} scss](../.vuepress/components/bg-random.vue)

css本身是没有提供给我们任何随机功能的，实现上方看起来并没有重复效果的是因为在设置背景的时候使用了“相对质数”，这个时候他们的最小公倍数也就是他们的乘积，只有达到它们乘积的时候才会出现重复的现象, 例如上方就是 41 * 63 * 81 = 209223，至此我们成功创造了一个目前显示屏幕无法完全观察的背景。


::: tip 质数
除了1和自身以外，无法被除尽的数字。
:::

::: tip 相对质数
相对无法被除尽的数字，最简单的办法就是尽量选择质数，质数跟其他任意数字都是相对质数。
:::



