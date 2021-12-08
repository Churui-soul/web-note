<template>
    <div class="css-irregular-shadow">
        <div>
            <span>伪元素</span>
        </div>

        <div>
            <span>虚线边框</span>
        </div>

        <div>
            <span>切角</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.css-irregular-shadow {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}

.css-irregular-shadow div {
    position: relative;
    width: 160px; height: 160px;
    display: table;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    background-color: #FFC914;
    filter: drop-shadow(5px 5px 5px #17BEBB);

    span {
        display: table-cell;
        vertical-align: middle;
    }
}

.css-irregular-shadow div:first-child {
    &::before {
        content: '';
        position: absolute;
        top: calc(50% - 1.5rem); left: 100%;
        width: 100%;
        border: 1.5rem solid transparent;
        border-left-color: #FFC914;
    }
}

.css-irregular-shadow div:nth-child(2) {
    color: var(--c-text);
    border: 1rem dashed #FFC914;
    box-sizing: border-box;
    background-color: transparent;
}

.css-irregular-shadow div:last-child {
    background: 
        0 50%/50% 100% linear-gradient(45deg, transparent 16px, #FFC914 0),
        100% 0/50% 100% linear-gradient(-45deg, transparent 16px, #FFC914 0);
    background-repeat: no-repeat;
}
</style>