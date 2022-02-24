module.exports = {
  title: 'Chailar\'s blog',
   base:'/Study-Notes/',
  description: '个人笔记博客',
  head: [
    ['link', { rel: 'icon', href: 'img/logo.png' }],
    ['link', {
      rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css'
    }]
  ],
  theme: 'vdoing',
  themeConfig: {
    logo: 'img/logo.png',
    category: false,
    tag: false,
    archive: false,
    updateBar: {
      showToArticle: false
    },
    sidebar: 'structuring',
    nav: [{
      text: '前端', link: 'note/web/', items: [
        {
          text: '三剑客', link: '/note/web/', items: [
            { text: 'HTML', link: '/note/web/sjk/html/' },
            {
              text: 'CSS', link: '/note/web/sjk/css/'
            }, {
              text: 'JavaScript', link: '/note/web/sjk/js/'
            }
          ]
        }, {
          text: '表单', link: '/pages/f4b2f7/'
        }, {
          text: '框架', items: [
            { text: 'JQuery', link: '/pages/baf642/' }
          ]
        }
      ]
    }, {
      text: 'Java', items: [{
        text: 'Java容器', items: [{
          text: 'JavaWeb', link: '/note/java/javaEE/'
        }]
      }]
    }, {
      text: '工具', link: '/note/tools/', items: [{
        text: 'markdown', link: '/pages/c314ae/'
      }, {
        text: 'git', link: '/note/tools/git/'
      }]
    }, {
      text: ' 学校科目', link: '/note/school/'
    }
    ]
  },
  markdown: {
    lineNumbers: false
  },
  plugins: [['one-click-copy', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
    copyMessage: '白嫖成功!',
    toolTipMessage: '立即白嫖',
    duration: 300,
  }], ['zooming', {
    selector: '.theme-vdoing-content img:not(.no-zoom)',
    options: {
      bgColor: 'rgba(0,0,0,0.6)',
    },
  }],[{
    name: 'custom-plugins',
    globalUIComponents: ["GlobalTip"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
  }]]
}