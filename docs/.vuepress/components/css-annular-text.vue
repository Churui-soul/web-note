<template>
<div class="annular-text">
    <svg viewBox="0 0 100 100">
        <path id="circle" d="m0,50 a50,50 0 1,1 0,1 z"/>

        <text><textPath xlink:href="#circle">
            EDG NB -- 鲁迅
        </textPath></text>
    </svg>
</div>
</template>

<style lang="scss" scoped>
.annular-text {
    width: 200px; height: 200px;
    margin: 3rem auto 0;
}
.annular-text svg {
    display: block;
    overflow: visible;
}
.annular-text path {
    fill: none;
}
</style>