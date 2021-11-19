<template>
    <div>
        <img :src="require('../public/stars-bg.jpg')" alt="背景图">
    </div>
</template>

<style lang="scss" scoped>
div {
    width: 260px;
    height: 260px;
    margin: 0 auto;


}
.diamond {
    clip-path: polygon(
        50% 0,
        100% 50%,
        50% 100%,
        0 50%
    );

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.transition {
    transition: cubic-bezier(0.39, 0.575, 0.565, 1) .3s;

    &:hover {
        clip-path: polygon(
            0 0,
            100% 0,
            100% 100%,
            0 100%,
        );
    }
}
</style>