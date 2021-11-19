---
prev: 
    text: 多重边框
    link: ./multiple-border.md
next: 
    text: 背景图案
    link: ./bg-pattern.md
---

# 条纹背景
::: tip 前置知识
[repeating-linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-linear-gradient())
:::

<bg-stripe />

``` css {5}
background-image: repeating-linear-gradient(
    45deg,
    #42b983,
    #42b983 40px,
    #4abf8a 0,
    #4abf8a 80px,
);
```
上方第五行高亮行是为了避免重复设置，规范中找到捷径。
::: tip CSS 图像（第三版）（http://w3.org/TR/css3-images）
“如果某个色标的位置值比整个列表中在它之前的色标的位置值都要
小，则该色标的位置值会被设置为它前面所有色标位置值的最大值。”
:::
也就是说当我们把色标位置值设置为0的时候它就会自动取前一个色标位置。

根据 CSS 图像（第四版）（http://w3.org/TR/css4-images）计划新增的一个简化语法来看，很快我们就
可以在同一个色标上指定两个位置值了。这个简写语法的含义相当于两个连续的色标具有相同的颜色和不
同的位置，这个特性在创建渐变图案时是十分有用的。

也就是说我们可以把代码优化成这样：
``` css
background-image: repeating-linear-gradient(
    45deg,
    #42b983 0 40px,
    #4abf8a 0 80px,
);
```
