<template>
    <div>trapezoid</div>
</template>

<style lang="scss" scoped>
div {
    position: relative;
    z-index: 1;
    width: 12rem; height: 3rem;
    line-height: 3rem;
    color: #fff;
    text-align: center;
    margin: 0 auto;
}

.trapezoid {
    &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        z-index: -1 ;
        transform: scaleY(1.5) perspective(.5rem) rotateX(5deg);
        transform-origin: bottom;
        background-color: #14213D;  
    }
}

.trapezoid-left {
    &::before {
        transform-origin: left;
        transform: translateY(-.15rem) perspective(.5rem) rotateX(2deg);
    }
}
</style>