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
<template>
    <button :class="className">
        <slot/>
    </button>
</template>

<style lang="scss" scoped>
button {
    width: 10rem;
    height: 3rem;
    cursor: pointer;
    font-size: 16px;
    border-radius: .4em;
    border: .2em solid transparent;
}

@keyframes gradual-change {
    to {
        background-position: 100%;
    }
}  
.gradual-change {
    background: 
        linear-gradient(var(--c-bg), var(--c-bg)) padding-box,
        repeating-linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82) border-box;
    background-size: 300%;
    
    animation: gradual-change linear 3s alternate infinite;
}
</style>