(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{357:function(t,s,e){"use strict";e.r(s);var a=e(7),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hexo-github搭建个人博客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hexo-github搭建个人博客"}},[t._v("#")]),t._v(" hexo+GitHub搭建个人博客")]),t._v(" "),s("p",[t._v("前言：看别人有一个自己的博客挺好的，反正都是程序员，为啥咱搞不出来，所以就网上搜索资料，依靠GitHub提供服务配合Hexo搭建个人博客，说来惭愧16年就有GitHub账号，一直不知道还有可以搭建博客的事情，哎~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~言归正传")]),t._v(" "),s("h2",{attrs:{id:"相关步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关步骤"}},[t._v("#")]),t._v(" 相关步骤：")]),t._v(" "),s("h3",{attrs:{id:"准备工作-开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作-开始"}},[t._v("#")]),t._v(" 准备工作 开始")]),t._v(" "),s("p",[t._v("win+R 输入cmd 回车\n输入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("C:\\Users\\骚爷>npm -v\n6.4.1\n\n")])])]),s("p",[t._v("若没有出现版本号，进入nodejs官网："),s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nodejs.org/en/"),s("OutboundLink")],1),t._v("，下载并安装好：\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/nodejs.jpg",alt:"nodejs官网"}})]),t._v(" "),s("p",[t._v("为啥要检查这个呢，往下看↓\n安装Git和配置好Git环境，"),s("a",{attrs:{href:"https://trhsy.github.io/git",target:"_blank",rel:"noopener noreferrer"}},[t._v("请移步"),s("OutboundLink")],1),t._v("\n查看一下版本\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/git_version.jpg",alt:"git版本"}}),t._v("\n你若安装了可以跳过这一步骤\n揭下来就是Github账户注册和新建项目，项目必须要遵守格式：账户名.github.io，不然接下来会有很多麻烦。\n账户注册很简单，可能会耗时间这里就不讲了，直接新建项目，主要右上角有个加号，点击选择new repository\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/new_repository.jpg",alt:"创建项目"}}),t._v("\n输入名字，注意名字一定要以 账户名.github.io的格式\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/create.jpg",alt:"账户名"}}),t._v("\n在建好的项目右侧有个settings按钮，点击它，向下拉到GitHub Pages，你会看到那边有个网址就是https://你的项目名.github.io，访问它，你将会惊奇的发现该项目已经被部署到网络上，能够通过外网来访问它。\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/pages.jpg",alt:"page"}})]),t._v(" "),s("h3",{attrs:{id:"准备工作结束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作结束"}},[t._v("#")]),t._v(" 准备工作结束")]),t._v(" "),s("h2",{attrs:{id:"hexo安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hexo安装"}},[t._v("#")]),t._v(" hexo安装")]),t._v(" "),s("p",[t._v("到这里准备工作已经结束了，咱们开始安装hexo\n我是为了方便存储直接放到了我的移动硬盘里，你也可在D盘下新建一个文件夹在cmd中切换到该目录下\n下面是我的目录\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/myml.jpg",alt:"我的目录"}}),t._v("\n之后直接输入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install hexo -g\n")])])]),s("p",[t._v("开始安装hexo,等待结束\n输入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hexo -v\n")])])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/hexo.jpg",alt:"hexo版本"}}),t._v("\n输入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hexo init\n")])])]),s("p",[t._v("初始化该文件夹，估计要等一下\n看到后面的“Start blogging with Hexo！”，说明安装成功了\n输入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install\n")])])]),s("p",[t._v("，安装所需要的组件\n然后输入 "),s("code",[t._v("hexo g")]),t._v(" 这个是生成文件，之后输入"),s("code",[t._v("hexo s")]),t._v("\n本地部署启动\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/hexos.jpg",alt:"hexo部署"}}),t._v("\n如出现下面的页面说明配置成功了\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/hexohtml.png",alt:"hexo成功"}})]),t._v(" "),s("h2",{attrs:{id:"hexo与github联系起来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hexo与github联系起来"}},[t._v("#")]),t._v(" hexo与GitHub联系起来")]),t._v(" "),s("p",[t._v("在你刚才创建的目录上右键 git Bash Here\n输入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git config --global user.name "你的github用户名"\ngit config --global user.email "你的github邮箱"\n')])])]),s("p",[t._v("设置Git的user name和email")]),t._v(" "),s("p",[t._v("输入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd ~/.ssh\n")])])]),s("p",[t._v("，检查是否由.ssh的文件夹\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/bash.jpg",alt:"bash"}}),t._v("\n输入命令")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('ssh-keygen -t rsa -C "你的邮箱"\n')])])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/ssh.jpg",alt:"ssh"}}),t._v("\n回车，回车输入Y,回车回车回车~~就能生成密钥默认存储路径C:\\Users\\用户.ssh\n输入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('eval "$(ssh-agent -s)"\nssh-add ~/.ssh/id_rsa\n')])])]),s("p",[t._v("添加密钥到ssh-agent,添加生成的SSH key到ssh-agent\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/id_rsa.jpg",alt:"id_rsa.jpg"}}),t._v("\n我们把刚才生成的密钥添加到github中，登录到github,右上角头像settings,\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/settings.jpg",alt:"settings.jpg"}}),t._v("\n左边菜单ssh and GPG keys 新建new ssh key\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/sshkeys.jpg",alt:"sshkeys.jpg"}}),t._v("\n把生成的id_rsa.pub文件记事本打开内容复制进去\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/addkeys.jpg",alt:"addkeys.jpg"}}),t._v("\n输入ssh -T git@github.com，测试添加ssh是否成功。\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/hi.jpg",alt:"hi.jpg"}}),t._v("\n如果看到Hi后面是你的用户名，就说明成功了\n准备工作也好了，下面要配置怎么把hexo部署到github了")]),t._v(" "),s("h2",{attrs:{id:"部署hexo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署hexo"}},[t._v("#")]),t._v(" 部署hexo")]),t._v(" "),s("p",[t._v("首先到你创建的目录下找到_config.yml文件\n修改完善 deploy")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git@github.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("123love123/123love123.github.io.git\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("brabch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])])]),s("p",[t._v("repository值就是你创建的github项目下的ssh\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/sshurl.jpg",alt:"sshurl.jpg"}}),t._v("\n在生成部署之前需要安装一个扩展插件\n输入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install hexo-deployer-git --save\n")])])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/kz.jpg",alt:"kz.jpg"}}),t._v("\n好了之后就开始部署了\n别人都是用命令")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hexo d -g\n")])])]),s("p",[t._v("我不着用，为啥，我觉得有一个缺陷不知道是缓存还是什么每次都要等老长时间才能显示更新的东西，所以我认为是缺陷\n我是这么干的")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hexo g\nhexo d\n")])])]),s("p",[t._v("拆开来，先生成，再部署\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/hexo_gggg.jpg",alt:"hexo_gggg.jpg"}}),t._v(" "),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/hexo_ddd.jpg",alt:"hexo_ddd.jpg"}}),t._v("\n部署成功后访问你的地址：http://用户名.github.io\n我之后修改了很多，修改了主题用的是next，"),s("a",{attrs:{href:"https://trhsy.github.io/hexo_next",target:"_blank",rel:"noopener noreferrer"}},[t._v("机票"),s("OutboundLink")],1),t._v(",还添加了live2d，"),s("a",{attrs:{href:"https://trhsy.github.io/live2d",target:"_blank",rel:"noopener noreferrer"}},[t._v("机票"),s("OutboundLink")],1),t._v("看板娘，而且是俩，为啥是俩呢本来自己看官方配置了一个挺好的，但是无意间看到别人整的还可以换衣服，我又找了度娘学习了一下，"),s("a",{attrs:{href:"https://trhsy.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("这是我的"),s("OutboundLink")],1),t._v(" 博客地址，后续我会把我制作博客的过程全部记录下来，今天就就到这里")])])}),[],!1,null,null,null);s.default=r.exports}}]);