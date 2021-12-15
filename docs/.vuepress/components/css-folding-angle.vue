<template>
    <div>
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
    position: relative;
    color: #333;
    width: 200px; height: 200px;
    background: #EFD28D;
    background: 
        linear-gradient(to right top, #d3b97e 50%, transparent 0) right top/2rem 2rem no-repeat,
        linear-gradient(to left bottom, transparent 2rem, #EFD28D 0);
}

.container.correct {
    background: 
        linear-gradient(to right top, #d3b97e 50%, transparent 0) right top/2rem 2rem no-repeat,
        linear-gradient(to left bottom, transparent 1.5rem, #EFD28D 0);
}

.angle150 {
    background: 
        linear-gradient(to right top, #d3b97e 50%, transparent 0) right top/3rem 1.73rem no-repeat,
        linear-gradient(-150deg, transparent 1.5rem, #EFD28D 0);
}


.angle150-before, .angle150-before-level2 {
    background: linear-gradient(-150deg, transparent 1.5rem, #EFD28D 0);

    &::before {
        content: '';
        position: absolute;
        top: 0; right: 0;
        width: 3rem; height: 1.73rem;
        background: linear-gradient(-150deg, #d3b97e 1.5rem, transparent 0);
        transform: rotateY(180deg) rotateZ(120deg);
    }
}
.angle150-before-level2 {
    border-radius: .4rem;

    &::before {
        border-radius: .4rem;
        background: linear-gradient(-150deg, rgba(0, 0, 0, .2) 10%, transparent 50%);
        box-shadow: .2rem -.2rem .4rem -.2rem rgba(0, 0, 0, .2);
    }
}
</style>