<template>
    <div class="bg-container">
        <div class="bg-panel"></div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup () {
        let deg = ref(0)

        return {
            deg
        }
    }
}
</script>

<style lang="scss" scoped>
.bg {
    &-panel {
        width: 100%;
        height: 300px;
        background-image: repeating-linear-gradient(
            45deg,
            var(--c-tip) 0 40px,
            var(--c-warning) 0 80px,
        );
    }
}
</style>