(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{338:function(t,a,s){"use strict";s.r(a);var r=s(7),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rabbitmq3-7-springboot2-1-5整合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq3-7-springboot2-1-5整合"}},[t._v("#")]),t._v(" RabbitMQ3.7+springboot2.1.5整合")]),t._v(" "),a("h2",{attrs:{id:"了解什么事rabbitmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解什么事rabbitmq"}},[t._v("#")]),t._v(" 了解什么事RabbitMQ")]),t._v(" "),a("h2",{attrs:{id:"下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[t._v("#")]),t._v(" 下载安装")]),t._v(" "),a("h3",{attrs:{id:"linux-下安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-下安装"}},[t._v("#")]),t._v(" linux 下安装")]),t._v(" "),a("p",[t._v("我这边用的是 ubuntu\n所以首先需要更一下库执行"),a("code",[t._v("apt-get update")]),t._v("接着执行\n"),a("code",[t._v("apt-get install erlang")]),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/erlang-install.png",alt:"erlang-install"}}),t._v("\n安装完毕后，输入erl查看erlang版本，出现如下图则表示安装成功。\n然后退出erlang命令行：按下ctrl+c，然后输入a即可。\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/erl.png",alt:"erl"}}),t._v("\n接下来安装rabbitmq："),a("code",[t._v("apt-get install rabbitmq-server")]),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/rabbitmq-install.png",alt:"rabbitmq-install"}}),t._v("\n安装完毕后，查看rabbitmq状态："),a("code",[t._v("rabbitmqctl status")]),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/rabbitmq-sataus.png",alt:"rabbitmq-sataus"}}),t._v("\n可以通过以下命令操作rabbitmq。\n启动rabbitmq： "),a("code",[t._v("service rabbitmq-server start")]),t._v("\n停止rabbitmq： "),a("code",[t._v("service rabbitmq-server stop")]),t._v("\n重启rabbitmq： "),a("code",[t._v("service rabbitmq-server restart")]),t._v("\n启动rabbitmq插件："),a("code",[t._v("rabbitmq-plugins enable rabbitmq_management")]),t._v("\n这个可以启动rabbitmq的web控制台。\n"),a("code",[t._v('rabbitmqctl set_permissions -p / 用户名 ".*" ".*" ".*"')]),t._v("\n然后我们登陆出现了问题，提示我们只能本地登陆。\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/rabbitmq-login.png",alt:"rabbitmq-login"}}),t._v("\n问题解决：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("找到这个文件rabbit.app\n/usr/lib/rabbitmq/lib/rabbitmq_server-3.7.7/ebin/rabbit.app\n将：{loopback_users, [<"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("”guest”")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(">]}，\n改为：{loopback_users, []}，\n原因：rabbitmq从3.3.0开始禁止使用guest/guest权限通过除localhost外的访问\n")])])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/rabbitmq-wt.png",alt:"rabbitmq-wt"}}),t._v("\n完了重新一下就行了")]),t._v(" "),a("h3",{attrs:{id:"windows下安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows下安装"}},[t._v("#")]),t._v(" windows下安装")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.erlang.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载Erlang "),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.rabbitmq.com/install-windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载rabbitmq"),a("OutboundLink")],1),t._v("\n先安装Erlang,之后在安装rabbitmq.")]),t._v(" "),a("p",[t._v("安装完成后  打开http://localhost:15672 可以看到\n"),a("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/rabbitmq1.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("rabbitmq1"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"整合到springboot中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整合到springboot中"}},[t._v("#")]),t._v(" 整合到springboot中")]),t._v(" "),a("p",[t._v("springboot 继承 RabbitMQ,在pom.xml中添加")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-amqp"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("...未完待续...")]),t._v(" "),a("p",[t._v("如果本文对您有所帮助，请打赏给我吧，我先送个你也红包往下看，你可以把扫到红包打赏个我哦！\n"),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/trhsy/PicGo/img/hb.jpg",alt:"红包"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);