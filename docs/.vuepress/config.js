module.exports = {
    themeConfig: {
      logo: '/assets/img/hero.png',
      nav: [
        { text: '首页', link: '/' },
        { text: '项目记录', link: '/about/'},
        {
            text: '学习笔记',
            ariaLabel: 'Study',
            items: [
              { text: '前端', link: '/Study/qianduan/' },
              { text: '其他', link: '/Study/qita/' }
            ]
          },
        { text: 'GitHub', link: 'https://github.com/Mirror-late/',target:'_blank'},
      ],
      sidebar:[
        '',
        'about'
      ]
    }
  }