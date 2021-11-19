---
prev: 
    text: 浏览器支持
    link: ./supports.md
next: 
    text: 条纹背景
    link: ./bg-stripe.md
---

# 多重边框
css工作组曾讨论过多重边框，但限于其没有足够多的应用场景、并且可以通过border-image去实现同样的效果，最后忽略了这一点。

## box-shadow
即便如此我们仍可以通过[box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)来实现这一点，在box-shadow中的第四个参数可以设置其模糊距离，当模糊距离为0的时候，我们就可以得到一个假”边框“。

<css-multiple-borders class-name="shadow-border"/>

``` css
box-shadow: 0 0 0 1.5rem #42b983;
background-color: #4abf8a; 
```
投影支持我们使用**逗号分隔语法，来创建任意数量的投影**，所以我们可以更改上面的代码来实现多重边框的效果。

<css-multiple-borders class-name="shadow-border multiple" />

``` css
box-shadow: 0 0 0 1.5rem #42b983,
            0 0 0 3rem #e7c000;
background-color: #4abf8a; 
```

因为我们这里是用投影来模拟的边框，它和边框的行为不完全一致。
1. 不会影响布局、不会占用空间，也不会受到`box-sizing`的属性影响。

    通过内边距和外边距去消除其带来的副作用（这取决于投影是内嵌还是外扩）。
2. 不会响应你的鼠标事件。

    内嵌投影可以解决这个问题，将投影置入元素内圈。


## outline
当实现场景只需要两个外边框的时候还可以使用[outline](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)属性去实现。这里实现的效果和上方是一样的。
``` css
border: 1.5rem solid #42b983;
outline: 1.5rem solid #e7c000;
```

我们还可以用他来实现虚线、并将outline-offset设置为负值就可以轻松的实现一个封边的效果。
<css-multiple-borders class-name="outline-dashed" />

``` css
border-radius: 1rem;
outline: 1px dashed #fff;
outline-offset: -1rem;
background-color: rgba(0, 0, 0, 0.66);
```
可以看到这里的描边并没有根据并没有border-radius去变成圆角，这是因为我们将ouline-offset设置为负值造成的副作用，当其不为负值的时候就会去贴合border-radius。

<css-multiple-borders class-name="outline-solid" />

``` css
border-radius: 1rem;
outline: 1rem solid #42b983;
background-color: rgba(0, 0, 0, 0.66);
```
为了方便查看这里换成了深色outline作为填充色。
