---
next:
    text: 多重边框
    link: ./multiple-border.md
---

# 浏览器支持

用户可能会以各种浏览器打开我们开发的页面，但不同的浏览器表现还存在不同的差异（比如他可能会让我们加上一个前缀），不同的浏览器版本也会存在某些所使用的特性不支持的情况。

为了支持那些较早的浏览器，我们可能需要把代码写成这样才能确保其能正常运行。

```css
transform: rotate(90deg);
-o-transform: rotate(90deg); /* Opera */
-ms-transform: rotate(90deg); /* IE */
-moz-transform: rotate(90deg); /* Firefox */
-webkit-transform: rotate(90deg); /* Chrome */
```

## Supports

当我们想尝试去使用一些新特性的时候，还可以试试[@Supports](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@supports)规则来实现回退。

```css
h1 {
    color: '#333';
}

@supports (text-shadow: 0 0 0.2em #1ed4a1) {
    h1 {
        text-shadow: 0 0 0.2em #1ed4a1;
    }
}
```

### 规则基础用法
```css
/* 支持Flex布局 */
@supports (display: flex) {}
/* 不支持Flex布局 */
@supports not (display: flex) {}
/* 同时支持Flex布局和Grid布局 */
@supports (display: flex) and (display: grid) {}
/* 支持Flex布局或者支持Grid布局 */
@supports (display: flex) or (display: grid) {}
```

也可以连续使用

```css
@supports (display: flex) and (display: grid) and (gap: 0) {}
@supports (display: flex) or (display: grid) or (gap: 0) {}
```

但是不可以混用

```css
@supports (display: flex) or (display: grid) and (transform: rotate(90deg)) {}
```

### 测试选择器
我们还可以通过`select`来测试浏览器是否支持选择器语法，例如用它来测试[:default](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:default)伪类。

```css
@supports select(: default) {
    #result:before {
        content: '该浏览器支持:default伪类';
        color: green;
    }
}
```

也可以配合操作符去使用

```css
@supports not select(: default) {
    #result:before {
        content: '该浏览器不支持:default伪类';
        color: red;
    }
}
```

### 测试自定义属性

```css
@supports (--color: green) {
    :root {
        --color: green;
    }

    body {
        color: var(--color);
    }
}
```

## 函数判断

我们还可以通过元素来判断所使用的属性是否被支持，其核心思路就是检查该属性在`element.style`对象上是否存在。

```js
const testProperty = (property) => property in document.documentElement.style
```

如果想检查属性当中某一个具体的属性值的时候，我们就需要将其赋值到一个元素上，然后判断其是否生效。

```js
const testPropertyValue = (property, value) => {
    const el = document.createElement('div')
    el.style[property] = value

    return !!el.style[property]
}
```
