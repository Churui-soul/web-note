<template>
    <div class="pie"></div>
</template>

<style lang="scss" scoped>
.pie {
    width: 200px; height: 200px;
    border-radius: 50%;
    background-image: linear-gradient(to right, var(--c-text) 50%, #C8E9A0 0);
}

.mask::before {
    content: '';
    display: block;
    width: 50%; height: 100%;
    margin-left: 50%;
    background-color: var(--c-text);
    border-radius: 0 100% 100% 0 / 50%;
    transform-origin: left;
}
.mask-rotate2::before {
    transform: rotate(.2turn);
}
.mask-rotate6::before {
    transform: rotate(.6turn);
}

.mask-animation::before {
    animation: 
        spin linear 3s infinite,
        // step-end 在动画运动过程中不会产生过渡效果，直接变为关键帧
        bg step-end 6s infinite;
}

.mask-animation-paused::before {
    animation-delay: inherit;
    animation-play-state: paused;
}

@keyframes spin {
    to { transform: rotate(.5turn); }
}
@keyframes bg {
    50% { background: #C8E9A0; }
}
</style>