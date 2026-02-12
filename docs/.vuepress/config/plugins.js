module.exports = [
    ['vuepress-plugin-code-copy', true],  //复制代码块的插件
    'reading-progress',
    //光标效果的插件
    [
        'cursor-effects', {
            size: 2, // size of the particle, default: 2
            shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
        }
    ],

    //网站动态标题
    ['dynamic-title', {
        // showIcon: '',
        showText: '欢迎回来  O(∩_∩)O~~',
        // hideIcon: '',
        hideText: '等等，你别走啊 ::>_<::',
        recoverTime: 2000,
    }],

    //不同代码切换
    [
        'code-switcher',
        {
            groups: {
                default: { ts: 'TypeScript', js: 'JavaScript' },
                jvm: { java: 'Java', kotlin: 'Kotlin', jruby: 'JRuby' },
            },
        },
    ],


    //2d看板娘
    [
        'vuepress-plugin-helper-live2d', {
            // 是否开启控制台日志打印(default: false)
            log: false,
            live2d: {
                // 是否启用(关闭请设置为false)(default: true)
                enable: true,
                // 模型名称(default: hibiki)>>>取值请参考：
                // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                model: 'hibiki',
                display: {
                    position: "right", // 显示位置：left/right(default: 'right')
                    width: 135, // 模型的长度(default: 135)
                    height: 300, // 模型的高度(default: 300)
                    hOffset: 65, //  水平偏移(default: 65)
                    vOffset: 0, //  垂直偏移(default: 0)
                },
                mobile: {
                    show: false // 是否在移动设备上显示(default: false)
                },
                react: {
                    opacity: 0.8 // 模型透明度(default: 0.8)
                }
            }
        }
    ],

]
