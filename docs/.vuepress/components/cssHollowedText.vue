<template>
    <main>
        <div>
            <h1>Stars</h1>
        </div>

        <div></div>
    </main>
</template>

<style lang="scss" scoped>
$bg-color: #ffffff80;
@mixin background {
    background-size: 100% auto;
    background-image: url('../public/stars-bg.jpg');
    background-position: center center;
}

main {
    position: relative;
    display: flex;
    overflow: hidden;
    @include background;

    // content
    div:first-child {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        color: transparent;
        text-align: center;
        background-clip: text;
        -webkit-background-clip: text;
        @include background;

        h1 {
            font-size: 8rem;
            font-weight: bold;
        }
    }

    // setting mask
    div:last-child {
        width: 80%;
        height: 80%;
        position: absolute;
        top: 10%;
        left: 10%;
        padding: 2rem;
        background-clip: content-box;
        background-color: $bg-color;
        box-sizing: border-box;
        border: .8rem solid $bg-color;
    }
}
</style>