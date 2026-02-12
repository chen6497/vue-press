module.exports = {
    logo: 'https://s3.bmp.ovh/imgs/2022/12/02/bc7428e3916c3a4c.jpg',
    nav: [
        { text: '首页', link: '/' },
        { text: '计算机基础', link: '/CouputerBasic' },
        {
            text: 'Java', items: [
                { text: 'JavaSE', link: '/Java/JavaSE' },
                { text: 'JavaEE', link: '/Java/JavaEE' }
            ]
        },
    ],
    lastUpdated: '上次更新', // string | boolean
    repo: 'https://gitee.com/chen_zhigengniao/vue-press',
    editLinks: true,
    docsDir: 'docs',
    // 默认为 "Edit this page"
    editLinkText: '编辑此页',
    editLinkPattern: ':repo/edit/:branch/:docsDir/:path',
    docsBranch: 'master',
    // 页脚
    footer: {
        createYear: 2026,
        copyrightInfo: `<a>流水不争先,争的是滔滔不绝</a>`
    },
}
