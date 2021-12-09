<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        mode: {
            type: String,
            default: 'mix-blend-mode'
        }
    },
    setup() {
        let blendMode = ref('luminosity')

        return {
            blendMode
        }
    }
})
</script>
<template>
    <template v-if="mode === 'mix-blend-mode'">
        <a>
            <img
                :src="require('../public/logo.png')"
                alt="logo"
            >
        </a>
    </template>

    <template v-else-if="mode === 'background-blend-mode'">
        <label>
            这里你可以测试各种值的变化
            <select v-model="blendMode">
                <option>normal</option>
                <option>multiply</option>
                <option>screen</option>
                <option>overlay</option>
                <option>darken</option>
                <option>lighten</option>
                <option>color-dodge</option>
                <option>color-burn</option>
                <option>hard-light</option>
                <option>soft-light</option>
                <option>difference</option>
                <option>exclusion</option>
                <option>hue</option>
                <option>saturation</option>
                <option>color</option>
                <option>luminosity</option>
            </select>
        </label>

        <div :style="{
            margin: '1rem auto',
            'background-blend-mode': blendMode
        }"></div>
    </template>
</template>

<style lang="scss" scoped>
a {
    display: block;
    width: 200px;
    height: 200px;
    background-color: #53599a;
    transition: 0.5s background-color;

    &:hover {
        background-color: transparent;
    }
}
a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: luminosity;
}

div {
    width: 200px;
    height: 200px;
    background: #53599a url('../public/logo.png') center/auto 100%;
    background-blend-mode: luminosity;
    transition: 0.5s background-color;

    &:hover {
        background-color: transparent;
    }
}
</style>