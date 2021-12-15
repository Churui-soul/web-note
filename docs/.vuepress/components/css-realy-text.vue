<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        hollowSvg: {
            type: Boolean,
            default: false 
        }
    },
})
</script>
<template>
    <h1>
        <template v-if="hollowSvg">
<svg>
    <use xlink:href="#realy-text" />
    <text id="realy-text" x="2.2rem" y="1.75rem">SVG</text>
</svg>
        </template>
        <span v-else><slot>WEB</slot></span>
    </h1>
</template>

<style lang="scss" scoped>
h1 {
    height: 3rem; line-height: 3rem;
    text-align: center;
    padding: 1rem 0 !important;
    margin-top: 1rem !important;
}

.printing {
color: #333;
text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
background-color: #AFA060;
}

.printing-dark {
color: #fff;
text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.8);
background-color: #764134;
}

.hollow-css {
color: #fff;
text-shadow: 1px 1px #000, -1px -1px #000,
            2px 2px #000, -2px -2px #000;
background-color: #9CC4B2;
}
.hollow-svg {
    color: #fff;
    background-color: #F68E5F;
}
.hollow-svg svg {
    width: 4.4rem;
    height: 3rem;
}
.hollow-svg text {
    fill: currentColor;
    text-anchor: middle;
    dominant-baseline: middle;
}
.hollow-svg use {
    stroke: #000;
    stroke-width: 6;
    stroke-linejoin: round;
}

.light {
color: #F5DD90;
text-shadow: 0 0 .1rem #F5DD90, 
            0 0 .3rem #F5DD90,
            0 0 .5rem #F5DD90;
background-color: #324376;
}
.light-hover {
transition: cubic-bezier(0.39, 0.575, 0.565, 1) .3s;

&:hover {
    color: #F68E5F;
    text-shadow: 0 0 .1rem #F68E5F, 
                0 0 .3rem #F68E5F,
                0 0 .5rem #F68E5F;
}
}
.light-vague {
transition: cubic-bezier(0.39, 0.575, 0.565, 1) .3s;

&:hover {
    color: transparent;
}
}
.light-filter span {
transition: cubic-bezier(0.39, 0.575, 0.565, 1) .3s;

&:hover {
    filter: blur(.1rem);
}
}

@mixin text-3d ($color: #fff, $depth: 5) {
    $shadows: ();
    $shadow-color: $color;

    @for $i from 1 through $depth {
        $shadow-color: darken($shadow-color, 10%);
        $shadows: append($shadows, 
                    0 $i * 1px $shadow-color, comma)
    }
    
    color: $color;
    text-shadow: append($shadows, 
                    0 $depth * 1px 10px #000, comma);
}
.bulge {
    @include text-3d(#fff, 5);
    font-weight: 700;
    background-color: #586BA4;
}
</style>