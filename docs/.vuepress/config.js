const path = require('path')

module.exports = {
    lang: 'zh-CN',
    base: '/',
    title: "前端笔记",
    description: "代码文档",
    themeConfig: {
        logo: '/logo.png',
        navbar: [{
            text: 'CSS',
            link: '/css/supports',
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
                        link: '/css/stripe-background.md'
                    }, {
                        text: '边框圆角',
                        link: '/css/border-radius.md'
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