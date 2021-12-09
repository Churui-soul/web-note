<template>
    <div class="container">
        <div>疯子带瞎子走路，这就是这个时代的病态。</div>
        <div>-- 莎士比亚</div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem;
    box-sizing: border-box;

    div:last-child {
        text-align: right;
    }
}

.container {
    color: #333;
    width: 200px; height: 200px;
    background: #EFD28D;
    background: 
        linear-gradient(to right top, #d3b97e 50%, transparent 0) right top/2rem 2rem no-repeat,
        linear-gradient(to left bottom, transparent 2rem, #EFD28D 0);
}

.container.correct {
    width: 200px; height: 200px;
    background: #EFD28D;
    background: 
        linear-gradient(to right top, #d3b97e 50%, transparent 0) right top/2rem 2rem no-repeat,
        linear-gradient(to left bottom, transparent 1.5rem, #EFD28D 0);
}
</style>