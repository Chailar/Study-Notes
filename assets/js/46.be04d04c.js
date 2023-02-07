(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{361:function(a,t,s){"use strict";s.r(t);var e=s(7),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"版本控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[a._v("#")]),a._v(" 版本控制")]),a._v(" "),t("h2",{attrs:{id:"初始化一个git仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化一个git仓库"}},[a._v("#")]),a._v(" 初始化一个Git仓库")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" init\n")])])]),t("h2",{attrs:{id:"添加文件到git仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加文件到git仓库"}},[a._v("#")]),a._v(" 添加文件到Git仓库")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"description"')]),a._v("\n")])])]),t("p",[t("code",[a._v("git add")]),a._v("可以反复多次使用，添加多个文件，"),t("code",[a._v("git commit")]),a._v("可以一次提交很多文件，"),t("code",[a._v("-m")]),a._v("后面输入的是本次提交说明。")]),a._v(" "),t("h2",{attrs:{id:"添加全部修改到暂存区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加全部修改到暂存区"}},[a._v("#")]),a._v(" 添加全部修改到暂存区")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),t("ul",[t("li",[t("code",[a._v("git add -A")]),a._v("表示添加所有内容")]),a._v(" "),t("li",[t("code",[a._v("git add .")]),a._v(" 表示添加新文件和编辑过的文件不包括删除的文件")]),a._v(" "),t("li",[t("code",[a._v("git add -u")]),a._v(" 表示添加编辑或者删除的文件，不包括新添加的文件。")])]),a._v(" "),t("h2",{attrs:{id:"查看工作区状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看工作区状态"}},[a._v("#")]),a._v(" 查看工作区状态")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" status\n")])])]),t("h2",{attrs:{id:"查看修改内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看修改内容"}},[a._v("#")]),a._v(" 查看修改内容")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("git diff")]),a._v(" 查看工作区(work dict)和暂存区(stage)的区别")]),a._v(" "),t("li",[t("code",[a._v("git diff --cached")]),a._v(" 查看暂存区(stage)和分支(master)的区别")]),a._v(" "),t("li",[t("code",[a._v("git diff HEAD -- <file>")]),a._v(" 查看工作区和版本库里面最新版本的区别")])]),a._v(" "),t("h2",{attrs:{id:"版本回退"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[a._v("#")]),a._v(" 版本回退")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--hard")]),a._v(" HEAD^\n")])])]),t("p",[a._v("以上命令是返回上一个版本，在Git中，用"),t("code",[a._v("HEAD")]),a._v("表示当前版本，上一个版本就是"),t("code",[a._v("HEAD^")]),a._v("，上上一个版本是"),t("code",[a._v("HEAD^^")]),a._v("，往上100个版本写成"),t("code",[a._v("HEAD~100")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"回退指定版本号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回退指定版本号"}},[a._v("#")]),a._v(" 回退指定版本号")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--hard")]),a._v(" commit_id\n")])])]),t("p",[a._v("commit_id是版本号，是一个用SHA1计算出的序列")]),a._v(" "),t("h2",{attrs:{id:"放弃暂存区修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#放弃暂存区修改"}},[a._v("#")]),a._v(" 放弃暂存区修改")]),a._v(" "),t("ol",[t("li",[a._v("退回工作区")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset HEAD "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("撤销工作区的修改")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout -- "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("Tip：")]),a._v(" "),t("ol",[t("li",[a._v("当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令"),t("code",[a._v("git checkout -- <file>")]),a._v("。")]),a._v(" "),t("li",[a._v("当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令"),t("code",[a._v("git reset HEAD <file>")]),a._v("，就回到了第一步，第二步按第一步操作。")]),a._v(" "),t("li",[a._v("已经提交了不合适的修改到版本库时，想要撤销本次提交，进行版本回退，前提是没有推送到远程库。")])]),a._v(" "),t("h2",{attrs:{id:"很重要的git-checkout注意点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#很重要的git-checkout注意点"}},[a._v("#")]),a._v(" 很重要的git checkout注意点")]),a._v(" "),t("p",[t("code",[a._v("git checkout -- file")]),a._v("命令中的"),t("code",[a._v("--")]),t("strong",[a._v("很重要！很重要！很重要！")]),a._v("，没有"),t("code",[a._v("--")]),a._v("，就变成了"),t("strong",[a._v("切换到另一个分支")]),a._v("的命令")])])}),[],!1,null,null,null);t.default=r.exports}}]);