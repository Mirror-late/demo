module.exports = {
    themeConfig: {
      logo: '/assets/img/hero.png',
      nav: [
        { text: '首页', link: '/' },
        { text: 'About', link: '/about/',target:'_blank' },
        {
            text: '学习',
            ariaLabel: 'Language Menu',
            items: [
              { text: '前端', link: '/language/chinese/' },
              { text: '其他', link: '/language/japanese/' }
            ]
          },
        { text: 'GitHub', link: 'https://github.com/Mirror-late/',target:'_blank'},
      ]
    }
  }