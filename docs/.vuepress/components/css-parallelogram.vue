<template>
    <button class="button">CLICK ME</button>
</template>

<style lang="scss" scoped>
.button {
    display: block;
    position: relative;
    z-index: 1;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    background-color: transparent;
    margin: 0 auto;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background-color: #218380;
        transform: skew(-45deg);
    }
}
</style>