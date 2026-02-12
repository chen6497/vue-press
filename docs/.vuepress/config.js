const head = require('./config/head')
const themeConfig = require('./config/themeConfig')
const plugins = require('./config/plugins')

module.exports = {
    title: '诚の博客',
    description: 'VuePress演示用',
    head,
    theme: 'vdoing',
    themeConfig,
    plugins,
}
