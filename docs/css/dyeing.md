---
prev: 
    text: 不规则图形投影
    link: ./irregular-shadow.md
next: 
    text: 毛玻璃
    link: ./ground-glass.md
---

# 染色效果

## 方案一
[mix-blend-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode)

这样处理的代码可读性很好，就是mix-blend-mode属性是不可以过渡的。

虽然我们可以通过改变下级颜色，通过颜色过渡来使其拥有过渡效果。

但是因为mix-blend-mode属性是始终与下级图层进行颜色混合，
如果你当前元素的父元素的父元素 =》直至根元素只要有一个拥有背景色，那么就不会变回图片本身的样式。

下方是个示例，因为根元素的影响，它永远的丢失自己。

如果你是个开发者，那么你可以尝试着将根元素背景色设置为`transparent`来帮助它找回自己。
<css-dyeing :style="{ 'margin': '1rem auto' }" />

@[code{22-27} html](../.vuepress/components/css-dyeing.vue)
@[code{61-77} scss](../.vuepress/components/css-dyeing.vue)

## 方案二
[background-blend-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-blend-mode)

这里使用了背景图片的方式去混合了颜色，这样他的混合目标将只会在当前元素内进行混合。

在语义上，这个元素并不是一张图片，因此并不会被读屏器之类的设备读出来，嗯、变了味了😶

<css-dyeing mode="background-blend-mode" :style="{ 'margin': '1rem auto' }" />

``` html
<div></div>
```
@[code{79-89} scss](../.vuepress/components/css-dyeing.vue)
