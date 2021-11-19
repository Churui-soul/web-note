<template>
    <h1>
        <span>border-radius: </span>

        <div class="border-example-list">
            <div class="border-example border-1-1"></div>
        </div>
    </h1>
    <h1>
        <span>border-radius: </span>

        <div class="border-example-list">
            <div
                v-for="(item, index) in [...new Array(2)]"
                :key="index"
                class="border-example"
                :class="[`border-2-${index+1}`]"
            ></div>
        </div>
    </h1>
    <h1>
        <span>border-radius: </span>

        <div class="border-example-list">
            <div
                v-for="(item, index) in [...new Array(3)]"
                :key="index"
                class="border-example"
                :class="[`border-3-${index+1}`]"
            ></div>
        </div>
    </h1>
    <h1>
        <span>border-radius: </span>

        <div class="border-example-list">
            <div
                v-for="(item, index) in [...new Array(4)]"
                :key="index"
                class="border-example"
                :class="[`border-4-${index+1}`]"
            ></div>
        </div>
    </h1>
</template>

<style lang="scss" scoped>
h1 {
    display: flex;
    flex-wrap: wrap;

    span {
        padding-bottom: 1em;
    }
}
$width: 1.8em;
$height: 1.5em;
$point-size: 0.5em;

.border-example {
    position: relative;
    min-width: $width;
    height: $height;
    border-radius: 0.4em;
    color: #ddd;
    background-color: #ddd;
    margin-left: 1em;
    overflow: hidden;

    &-list {
        display: flex;
        min-width: $width*4+4em;
    }
    &::before {
        content: ' ';
        position: absolute;
        top: 50%;
        left: 50%;
        width: $point-size;
        height: $point-size;
        transform: translate(-50%, -50%) rotate(45deg);
    }
}

@mixin border-radius-mask(
    $horizontal-color: (
        c1: transparent,
        c2: transparent,
        c3: transparent,
        c4: transparent,
    ),
    $vertical-color: (
        c1: map-get($horizontal-color, c1),
        c2: map-get($horizontal-color, c2),
        c3: map-get($horizontal-color, c3),
        c4: map-get($horizontal-color, c4),
    )
) {
    $width: $width + 0.2em;

    box-shadow: (-$width/2) 0.35em 0 0 map-get($horizontal-color, c1),
        (-$width/2) -0.15em 0 0 map-get($vertical-color, c1),
        0.35em (-$width/2) 0 0 map-get($horizontal-color, c2),
        -0.15em (-$width/2) 0 0 map-get($vertical-color, c2),
        ($width/2) -0.35em 0 0 map-get($horizontal-color, c3),
        ($width/2) 0.15em 0 0 map-get($vertical-color, c3),
        -0.35em ($width/2) 0 0 map-get($horizontal-color, c4),
        0.15em ($width/2) 0 0 map-get($vertical-color, c4);
}

.border-1-1::before {
    $color: (
        c1: #ec4e20,
        c2: #ff9505,
        c3: #016fb9,
        c4: #218380
    );
    @include border-radius-mask($color);
}
.border-2-1::before {
    $color: (
        c1: #ec4e20,
        c3: #016fb9
    );
    @include border-radius-mask($color);
}
.border-2-2::before {
    $color: (
        c2: #ff9505,
        c4: #218380
    );
    @include border-radius-mask($color);
}
.border-3-1::before {
    $color: (
        c1: #ec4e20
    );
    @include border-radius-mask($color);
}
.border-3-2::before {
    $color: (
        c2: #ff9505,
        c4: #218380
    );
    @include border-radius-mask($color);
}
.border-3-3::before {
    $color: (
        c3: #016fb9
    );
    @include border-radius-mask($color);
}
.border-4-1::before {
    $color: (
        c1: #ec4e20
    );
    @include border-radius-mask($color);
}
.border-4-2::before {
    $color: (
        c2: #ff9505
    );
    @include border-radius-mask($color);
}
.border-4-3::before {
    $color: (
        c3: #016fb9
    );
    @include border-radius-mask($color);
}
.border-4-4::before {
    $color: (
        c4: #218380
    );
    @include border-radius-mask($color);
}
</style>