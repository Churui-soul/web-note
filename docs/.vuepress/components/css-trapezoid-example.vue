<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup () {
        let nav = reactive({
            active: '1',
            list: [{
                id: '1',
                text: 'Home',
            }, {
                id: '2',
                text: 'Projects',
            }, {
                id: '3',
                text: 'About',
            }],
            tiltDirection: 'Bottom',
            tiltDirectionList: [{
                text: 'Left',
                classname: 'left'
            }, {
                text: 'Right',
                classname: 'right'
            }, {
                text: 'Bottom',
                classname: 'Bottom'
            }]
        })

        return {
            nav
        }
    },
})
</script>

<template>
    <nav :class="[`tilt-direction-${nav.tiltDirection}`]">
        <a
            v-for="item in nav.list"
            :key="item.id"
            :class="{ 
                'active': item.id === nav.active,
            }"
            @click="nav.active = item.id"
        >{{ item.text }}</a>
    </nav>
    <div class="container">
        <h1>transform-origin：</h1>
        
        <h1>
            <form>
                <label 
                    v-for="item in nav.tiltDirectionList"
                    :key="item.classname"
                >
                    <input 
                        type="radio" 
                        :checked="nav.tiltDirection === item.classname"
                        @change="nav.tiltDirection = item.classname">
                    {{ item.text }}
                </label>
            </form>
        </h1>
    </div>
</template>

<style lang="scss" scoped>
nav {
    margin-top: 1rem;
    user-select: none;
    white-space: nowrap;

    a {
        display: inline-block;
        cursor: pointer;
        text-align: center;
        position: relative;
        z-index: 1;
        // line-height 本身就可以起到设置高度的作用，所以这里没必要再去设置height了
        width: 10rem; line-height: 3rem;
        max-width: 33.33%;
        margin-left: -1.5rem;

        &::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: -1px;
            z-index: -1;
            border: .2rem solid #14213d;
            border-bottom: none;
            border-radius: 0.5em 0.5em 0 0;
            transform: scaleY(1.5) perspective(0.5rem) rotateX(4deg);
            transform-origin: bottom;
            background-color: #14213d;
        }
    }
    a.active {
        z-index: 2;
        &::before {
            bottom: -.2rem;
            box-shadow: 0 .1rem 0 0 #fca311;
            background-color: #fca311;
        }
    }

    a:first-child {
        margin-left: 1rem;
    }
}
nav > a,
nav > a:hover,
nav > a:focus {
    color: #fff;
    text-decoration: none !important;
    -webkit-tap-highlight-color: transparent;
}

nav.tilt-direction-left {
    a::before {
        transform-origin: left;
    }
}
nav.tilt-direction-right {
    a::before {
        transform-origin: right;
    }
}
nav.tilt-direction-left, nav.tilt-direction-right {
    a::before {
        transform: scaleX(.9) translateY(-.25rem) perspective(.5rem) rotateX(2.5deg);
    }
}

.container {
    height: 260px;
    border: .2rem solid #14213d;
    outline: 1rem solid #fca311;
    outline-offset: -1.2rem;
    background-color: #E5E5E5;
    padding: 2rem;

    label {
        display: inline-block;
        width: 10rem;
        padding-bottom: 1rem;
        white-space: nowrap;
    }
}
.transform-origin-choice {
    text-align: center;
    padding-top: 2rem;

    span {
        padding: 0 2rem;
    }
}
</style>