<template>
    <div :class="className"></div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        className: {
            type: String,
            default: ''
        }
    }
})

</script>

<style lang="scss" scoped>
div {
    width: 100%;
    height: 300px;
    margin: 1rem 0;
}

@mixin blueprint($spacing) {
    background-color: #58a;
    background-image: 
        linear-gradient(hsla(0, 0, 100%, .5) 1px, transparent 0),
        linear-gradient(90deg, hsla(0, 0, 100%, .5) 1px, transparent 0),
        linear-gradient(hsla(0, 0, 100%, 1) 2px, transparent 0),
        linear-gradient(90deg, hsla(0, 0, 100%, 1) 2px, transparent 0);
    background-size: $spacing $spacing,
        $spacing $spacing,
        $spacing*6 $spacing*6,
        $spacing*6 $spacing*6;
}

.blueprint {
    @include blueprint(15px)
}

@mixin polka($size, $dot: 30%) {
    background-size: $size $size;
    background-color: #DA4167;
    background-image: 
        radial-gradient(#832161 $dot, transparent 0),
        radial-gradient(#832161 $dot, transparent 0);
    background-position: 0 0,
        $size/2 $size/2;
}

.polka {
    @include polka(60px)
}

@mixin checkerboard ($size, $base, $color: hsla(0, 0, 0, .5)) {
    background-size: $size*2 $size*2;
    background-color: $base;
    background-image: 
        linear-gradient(45deg, $color 25%, transparent 0, transparent 75%, $color 0),
        linear-gradient(45deg, $color 25%, transparent 0, transparent 75%, $color 0);
    background-position: 0 0,
        $size $size;
}

.checkerboard {
    @include checkerboard(30px,  #58a)
}

.checkerboard-svg {
    background: #58a url('data:image/svg+xml,\
        <svg xmlns="http://www.w3.org/2000/svg"\
            width="100" height="100"\
            fill-opacity=".25">\
            <rect x="50" width="50" height="50" />\
            <rect y="50" width="50" height="50" />\
        </svg>');
    background-size: 60px 60px;
}

.angular-gradient {
    background-image: conic-gradient(red, yellow, lime, aqua, blue, fuchsia, red);
}
</style>