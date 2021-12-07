<template>
    <svg viewBox="0 0 32 32"> 
        <circle r="16" cx="16" cy="16" />
    </svg>
</template>

<style lang="scss" scoped>
svg {
    width: 200px;
    height: 200px;
    display: block;
    border-radius: 50%;
    transform: rotate(-90deg);

    circle {
        fill: #F6F5AE;
        stroke: #2E86AB;
        // 当描边宽度达到圆半径的两倍时就会覆盖圆。
        stroke-width: 32; 
        // 绘制虚线两段之间距离时，当距离大于圆的周长，线段就只会产生一段。
        // 这时我们就可以通过设置线段长度来控制占用百分比
        stroke-dasharray: 90 100; 
    }
}

.rotate-circle {
    circle {
        animation: rotate 3s linear infinite;
    }
}

@keyframes rotate {
    from {
        stroke-dasharray: 0 100;
    }
    to {
        stroke-dasharray: 101 100;
    }
}
</style>