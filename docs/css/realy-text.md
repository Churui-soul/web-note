# 现实中的文字效果

## 凸版印刷效果

### 浅底色
<css-realy-text class="printing" />

@[code{34-36} css](../.vuepress/components/css-realy-text.vue) 

### 深底色
<css-realy-text class="printing-dark" />

@[code{40-42} css](../.vuepress/components/css-realy-text.vue) 

## 空心效果

### CSS方案
以不设置文字模糊距离，多次添加阴影实现。
<css-realy-text class="hollow-css">CSS</css-realy-text>

@[code{46-49} css](../.vuepress/components/css-realy-text.vue) 

### SVG方案
<css-realy-text class="hollow-svg" hollow-svg>SVG</css-realy-text>

@[code{16-19} html](../.vuepress/components/css-realy-text.vue) 
@[code{51-68} css](../.vuepress/components/css-realy-text.vue) 

## 发光效果
<css-realy-text class="light" />

@[code{71-75} css](../.vuepress/components/css-realy-text.vue) 

### hover变色
<css-realy-text class="light light-hover" />

@[code{78-85} css](../.vuepress/components/css-realy-text.vue) 

### hover模糊
如果不支持text-shadow将什么都看不见
<css-realy-text class="light light-vague" />

@[code{88-92} css](../.vuepress/components/css-realy-text.vue) 

### hover模糊 - 优雅降级方案
<css-realy-text class="light light-filter" />

@[code{95-99} css](../.vuepress/components/css-realy-text.vue) 

## 文字凸起
sass知识点：
[@mixin and @include](https://sass-lang.com/documentation/at-rules/mixin) , 
[@for](https://sass-lang.com/documentation/at-rules/control/for) , 
[append](https://sass-lang.com/documentation/modules/list#append) , 
[darken](https://sass-lang.com/documentation/modules/color#darken)

<css-realy-text class="bulge" />

@[code{102-120} scss](../.vuepress/components/css-realy-text.vue) 
