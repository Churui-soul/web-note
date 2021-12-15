<template>
    <h1>
        <slot/>
    </h1>
</template>

<style lang="scss" scoped>
@font-face {
    font-family: Ampersand;
    src: local('mvboli');
    unicode-range: U+31;
}
@font-face {
    font-family: Ampersand2;
    src: local('mvboli');
    unicode-range: U+31,U+32,U+33;
}
@font-face {
    font-family: Ampersandnum;
    src: local('mvboli');
    unicode-range: U+30-39;
}
h1 {
    text-align: center;
}
h1 {
    font-family: Ampersand, Helvetica, sans-serif;
}
.str2 {
    font-family: Ampersand2, Helvetica, sans-serif;
}
.strnum {
    font-family: Ampersandnum, Helvetica, sans-serif;
}
</style>