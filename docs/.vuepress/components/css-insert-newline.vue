<template>
    <dl>
        <dt>HTML</dt>
        <dd>骨骼</dd>
        <dd>肉体</dd>
        <dt>CSS</dt>
        <dd>化妆</dd>
        <dt>JS</dt>
        <dd>才艺</dd>
    </dl>
</template>

<style lang="scss" scoped>
dl {
    color: #333;
    padding: 1rem;
    background-color: #FFD1BA;
}

dt::after {
    content: '：';
}

dd, dt {
    display: inline;
}

dd {
    margin: 0;
    font-weight: 600;
}

dd + dd::before {
    content: '，';
}

dd + dt::before {
    content: '\A';
    white-space: pre;
}
</style>