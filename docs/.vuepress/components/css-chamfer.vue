<template>
    <div></div>
</template>

<style lang="scss" scoped>
div {
    width: 380px;
    height: 220px;
    margin: 1em auto;
    background: #84BC9C;
}

.flat-angle {
    background: 
        0 50%/50% 100% linear-gradient(45deg, transparent 16px, #7FB069 0),
        100% 0/50% 100% linear-gradient(-45deg, transparent 16px, #D36135 0);
    background-repeat: no-repeat;
}
.circular-angle {
    background: 
        0 0/50% 50% 
        radial-gradient(circle at top left, transparent 32px, #D36135 0),
        100% 0/50% 50% 
        radial-gradient(circle at top right, transparent 32px, #7FB069 0),
        0 100%/50% 50% 
        radial-gradient(circle at bottom left, transparent 32px, #ECE4B7 0),
        100% 100%/50% 50% 
        radial-gradient(circle at bottom right, transparent 32px, #E6AA68 0);
    background-repeat: no-repeat;
}

.flat-angle-svg {
    border: 1.42rem solid transparent;
    border-image: 1 url('data:image/svg+xml,\
        <svg xmlns="http://www.w3.org/2000/svg"\
            width="3" height="3" fill="hsl(146, 29%, 63%)">\
            <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2" />\
        </svg>');
    background-clip: padding-box;
    transition: cubic-bezier(0.39, 0.575, 0.565, 1) .3s;
}


</style>