<template>
    <div>
        这是一段很长长长长长长长长长长长长长长长长长的文字，<a href="javascript:;">假装这是一个链接</a>。再加一个<a href="javascript:;">链接</a>
    </div>
</template>

<style lang="scss" scoped>
div {
    width: 160px;
    line-height: 1.5;
    margin: 1rem auto;
}

a {
    color: var(--c-text);
    background: linear-gradient(var(--c-text), var(--c-text)) left bottom/auto 1px no-repeat;
}

.dotted-line a {
    background: linear-gradient(to right, var(--c-text) 50%, transparent 0) left bottom/.6rem 1px repeat-x;
}
</style>