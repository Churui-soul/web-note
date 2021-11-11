<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        className: {
            type: String,
            default: ''
        }
    },
})
</script>

<template>
    <main :class="className"></main>
</template>
<style lang="scss" scoped>
main {
    width: 50%;
    min-width: 18rem;
    height: 5rem;
    margin: auto;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    background-color: var(--c-tip-bg);
}

.shadow-border {
    box-shadow: 0 0 0 1.5rem var(--c-tip);
}

.multiple {
    margin-top: 4rem;
    margin-bottom: 4rem;
    box-shadow: 0 0 0 1.5rem var(--c-tip),
                0 0 0 3rem var(--c-warning);
}

.outline-dashed {
    height: 8rem;
    margin: 0 auto;
    border-radius: 1rem;
    outline: 1px dashed #fff;
    outline-offset: -1rem;
    background-color: var(--code-hl-bg-color);
}

.outline-solid {
    height: 8rem;
    margin: 2rem auto;
    border-radius: 1rem;
    outline: 1rem solid var(--c-tip);
    background-color: var(--code-hl-bg-color);
}

</style>

