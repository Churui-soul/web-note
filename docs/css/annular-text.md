# 环形文字
这里简单解释下path中a的参数

a50,50 0 1,1 0,1:

50,50: 圆的水平，垂直半径均为50。

0: 图形相对于坐标系的旋转角度（不要用圆形去测试，测不出来的）。

1,1: 绘制大圆部分或是小圆部分（大：1, 小: 0），顺时针和逆时针(顺时针: 1, 逆时针: 0)

0,1: 绘制图形结束坐标点（这个配合大小圆时比较明显）。

<css-annular-text />

@[code{2-10} html](../.vuepress/components/css-annular-text.vue)

@[code{14-24} css](../.vuepress/components/css-annular-text.vue)
