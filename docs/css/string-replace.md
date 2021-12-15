# 华丽的 & 符号

在css当中，你可以指定页面中某个字符所引用的字体库。

实现方法可以通过这样来实现

::: warning 提示
这里的`src: local('mvboli');`加载了windows电脑中的mvboli字体，尝试时如没有效果，可以尝试引用一些其他字体进行尝试。
:::

## 指定一个
<css-string-replace>
    1 - 234567890
</css-string-replace>

@[code{8-12} scss](../.vuepress/components/css-string-replace.vue)

## 指定多个
<css-string-replace class="str2">
    123 - 4567890
</css-string-replace>

``` css
unicode-range: U+31,U+32,U+33;
```


## 指定区间
<css-string-replace class="strnum">
    1234567890
</css-string-replace>

``` css
unicode-range: U+30-39;
```

## unicode-range
其中unicode-range的语法是基于“Unicode 码位”的，而不是基于字符的字面形态。

在网上有不少工具可以转换，也可以在控制台试试下面这句 JavaScript 代码：

``` javascript
"&".charCodeAt(0).toString(16); // 返回26
```
