const path = require('path')
// css 变量修改方法
// container.style.setProperty("--x", x + "px")
module.exports = {
    lang: 'zh-CN',
    base: '/',
    title: "前端笔记",
    description: "代码文档",
    themeConfig: {
        logo: '/logo.png',
        navbar: [{
            text: 'CSS',
            children: [{
                text: '小册',
                link: '/css/supports',
                activeMatch: '^/css/',
            }, {
                text: '展品',
                link: '/css-exhibition/button',
                activeMatch: '^/css-exhibition/',
            }]
        }],
        sidebar: {
            '/css/': [
                {
                    text: 'CSS',
                    children: [{
                        text: '浏览器支持',
                        link: '/css/supports.md'
                    }, {
                        text: '多重边框',
                        link: '/css/multiple-border.md'
                    }, {
                        text: '条纹背景',
                        link: '/css/bg-stripe.md'
                    }, {
                        text: '背景图案',
                        link: '/css/bg-pattern.md'
                    }, {
                        text: '伪随机背景',
                        link: '/css/bg-random.md'
                    }, {
                        text: '连续的图像边框',
                        link: '/css/bg-border-continuity.md'
                    }, {
                        text: '半椭圆',
                        link: '/css/ellipse.md'
                    }, {
                        text: '平行四边形',
                        link: '/css/parallelogram.md'
                    }, {
                        text: '菱形',
                        link: '/css/diamond.md'
                    }, {
                        text: '切角效果',
                        link: '/css/chamfer.md'
                    }, {
                        text: '梯形标签页',
                        link: '/css/trapezoid.md'
                    }, {
                        text: '简单的饼图',
                        link: '/css/pie.md'
                    }, {
                        text: '简单的饼图-svg',
                        link: '/css/pie-svg.md'
                    }]
                }
            ],
            '/css-exhibition/': [
                {
                    text: '展品',
                    children: [{
                        text: 'button',
                        link: '/css-exhibition/button.md'
                    }]
                }
            ]
        }
    },
    plugins: [
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            }
        ]
    ]
};