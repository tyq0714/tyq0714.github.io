module.exports = {
  title: 'seven',
  description: '给时光以生命，而不是给生命以时光!',
  dest: './dist',
  port: '7777',
  base: '/dist/',
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  markdown: {
    lineNumbers: true
  },
  theme: 'reco',
  themeConfig: {
    nav: require('./nav'),
    sidebar: require('./sidebar'),
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: '有新的内容.',
        buttonText: '更新'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！',
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认文案 “标签”
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ]
    }
  }
}
