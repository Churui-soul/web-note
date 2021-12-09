<template>
    <div class="container">
        <div class="main">
            <h3>不要只因一次失败，就放弃你原来决心想达到的目的。</h3>

            <h3>
                <b>-- 莎士比亚</b>
            </h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: relative;
    width: 100%; height: 30vh;
}
.container, .main::before {
    background: url('../public/stars-bg.jpg') center/100% auto;
}
.main {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    z-index: 1;
    top: 15%;
    width: 70%; height: 70%;
    margin: auto;
    padding: 1rem;
    border-radius: .5rem;
    background-color: hsla(255, 255, 255, .3);
    box-sizing: border-box;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: -21.5%; left: -21.5%;
        width: 143%; height: 143%;
        filter: blur(20px);
        background-size: cover;
    }

    h3 {
        margin: 0;
    }
    h3:last-child {
        text-align: right;
    }
}
</style>