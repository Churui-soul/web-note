
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        className: {
            type: String,
            default: 'bg-border-continuity'
        }
    }
})
</script>
<template>
    <div :class="className">
        地上本来没有路，走的人多了，也就成了路。 --- 鲁迅《故乡》
    </div>
</template>

<style lang="scss" scoped>
div {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    margin: 1em 0;
}

.bg-border-continuity {
    padding: 1rem;
    border: 1rem solid transparent;
    background: 
        linear-gradient(#fff, #fff) padding-box,
        url('../public/stars-bg.jpg') border-box 0 / cover;
}

.bg-border-envelope {
    padding: 1rem;
    border: 1rem solid transparent;
    background: 
        linear-gradient(#fff, #fff) padding-box,
        repeating-linear-gradient(-45deg, 
            #F45B69 0 12.5%,
            transparent 0 25%,
            #4062BB 0 37.5%, 
            transparent 0 50%) 0 / 5em 5em;
}

@keyframes ants {
    to {
        background-position: 100%;
    }
}

.bg-border-ant {
    padding: 1rem;
    border: 1px solid transparent;
    background: 
        linear-gradient(#fff, #fff) padding-box,
        repeating-linear-gradient(-45deg, 
            #333 0 25%, 
            #fff 0 50%) 0 / .6em .6em;
    
    animation: ants 12s linear infinite;
}

.border-footer-text {
    border-top: .2em solid transparent;
    // 顶部 | 水平方向 | 底部
    border-image-slice: 100% 0 0;
    // cureentColor 继承文字颜色
    border-image-source: linear-gradient(90deg, currentColor 4em, transparent 0);
}
</style>