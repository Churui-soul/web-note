---
prev: ./folding-angle.md
next: ./textline-zebra-stripe.md
---


# 插入换行
<css-insert-newline />

@[code{1-11} html](../.vuepress/components/css-insert-newline.vue)

@[code{14-40} scss](../.vuepress/components/css-insert-newline.vue)

## 代码解读
有一个Unicode字符专门代表换行符。

css中这个字符为："\000A" , 可简写为 "\A"
js中为："\n"

这里使用了affter伪元素和[`+`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator)选择器进行操作：
1. 对后面有`<dd>`标签的dd元素设置了`,`进行分割。
2. 对后面是`<dt>`的dd元素标签设置换行。
