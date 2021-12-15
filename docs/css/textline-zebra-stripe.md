---
prev: ./insert-newline.md
---

# 文本行的斑马条纹

正常情况下当需要斑马线条纹的一般都是表格、列表之类的场景，它们都是块级元素，这时候就直接可以使用nth-child()来进行选择。

当斑马线需要加在一个经历多个换行文本的时候，因为其承载元素只有一个，这时候就没办法使用nth-child()来进行选择了。

这时可以使用渐变色的背景来实现斑马线的效果：
1. 设置背景的高度为3rem，使其自动继承文字的高度。
2. 设置背景的初始位置为content-box，这样无论在设置多少宽度的padding和border的情况下都可以使背景的条纹对应到每一行文字上。

<css-textline-zebra-stripe />

@[code{10-15} scss](../.vuepress/components/css-textline-zebra-stripe.vue)
