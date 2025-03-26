---
# 页面标题（必须）
title: Morning的小屋
# 发布时间（必须）
date: 2025-02-2
# 更新时间
updated: 2025-02-22
# 【可选】文章标签
tags: 
    - 博客搭建
    - Morning
    - 前端
    - Morning文章的测试标签
# 【可选】文章分类
categories: Morning的第一篇文章
# 文章描述
description: 本文章记录anzhiyu主题的功能学习过程
# 是否开启此篇文章的ai摘要
ai: true
keywords:
    - 博客搭建
    - Hexo
top_img: /img/可爱捏.jpg
# 主页的文章封面
cover: /img/可爱捏.jpg
# 是否展示此篇文章目录索引(用处不详)
toc: true
toc_number: true
# 很重要，用于主页展示（功能不详,目前知道了,但是top_group_index用处又不懂了）
swiper_index: 0
# 首页卡片配置（就是右边点进去推荐的那个东西，数字大的在上面，现在不知道了qwq） 
top_group_index: 2
# 用处不详
main_color: "#e6bf76"
# 数字越大置顶优先级越大（此篇文章为梦开始的地方）
sticky: 100
---
# 本篇文章详细记录了基于Hexo的anzhiyu主题配置教程。
# 此文记录hexo安知鱼主题部署时的一些心得
## 一些小tips
1. 主页左上角为分类，往下拉的右下角是标签（侧边栏），右上角更多分类是轮播图
2. 修改网站各种资料，例如标题、副标题和邮箱等个人资料，请修改博客根目录的_config.yml
(主题配置文件为theme/anzhiyu/_config.yml) 
3. 修改ip属地，需要修改anzhiyu目录下_config.yml的属性值
4.  已经失效，貌似停止服务
  `clock: true`
5. anzhiyu主题支持阿里与fontway图标，按照要求更改名称即可
6. 尝试使用相对路径访问本地文件时会出现无法通过调用api的手段自动识别cover并切换文章主色调的情况，这是正常的情况，可以通过上传到图床解决！（并且有一件非常重要的事情，api是通过调用top_img参数实现的，一定要配置！）
7. nav_music配置中，server为对应的歌单/歌手id所在的平台，如果是QQ音乐，则需要将默认值更改为tencent（其余平台同理）
8. 若追番页面配置不成功，请手动运行（`hexo bangumi -u` ）
9. 按照官方文档配置音乐馆时，我们会发现按照原文档（即使是原github项目）歌单信息依然无法刷新，经实验我们需要找到utils.js文件，并手动修改getCustomPlayList参数下的id与server。或者使用第二种方法将menu对应代码，做出以下更改。
`menu:
  我的:
    音乐馆: /music/?id=1708664797&server=tencent || icon-music`
10. 那个主题色配置在主题配置文件的
theme_color: 改，其他颜色相关的都在你 博客目录/themes/anzhiyu/source/css/_global/index.styl 这个styl里更改，白天和夜间大部分都各有一个
11. 在你的 博客目录/source/css/custom.css 中加入一下内容，source 里没有这个 css 目录和文件就自己创建一下

`/* 白天网站背景 */
#web_bg {
    background-size: 20rem;
    background-image: url(/img/bg.svg) !important;
    background-repeat: initial
}`

`/* 夜间网站背景 */
[data-theme=dark] #web_bg {
    background-size: 100rem;
    background-image: url(/img/bg-dark.jpg) !important;
}`

然后在安知鱼主题配置文件，找到 inject 并引入 css

`inject:
  head:
    # 自定义 css
    - <link rel="stylesheet" href="/css/custom.css">`
12. 主页轮播图有阴影不好看？做出以下修改即可：找到以下文件
myblogs\themes\anzhiyu\source\css\_extra\home_top\top_group_banner.css
修改以下代码即可，box-shadow即是阴影。
`.topGroup .todayCard::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 -109px 133px -9px #000000 inset;
}
`
## 以下为修改过的代码

### 1. 关于主题
1. 在index.styl文件中包含着大量主题的配色，本人更加喜欢橙黄色于是有以下变动
`--anzhiyu-theme-op-deep: #4259efdd;`


2. 在anzhiyu文件下的_config.yml文件中，可通过修改
`rror_404:
  enable: true
  subtitle: "这个废物还没有更新这样的文章呢
   （我会努力更新哒！ /(ㄒoㄒ)/~~）"
  background: https://bu.dusays.com/2023/05/08/645907596997d.gif`
进而修改404图片

3. 主题配置文件中
`swiper`属性控制主页右上角轮播图（需要文章数大于6）

4. myblogs\themes\anzhiyu\source\css\_extra\console\console.css路径下box-shadow参数修改为#e6c083

## 还没做的任务
1. 修改微信公众号图片            √
2. 修改侧边栏github与bilibili链接
3. 修改主题整体配色
4. 网站“总访问量”异常（需要配置51A统计）
5. 留言弹幕的token部署（需要在主题配置中更改token，转Md5的网站https://www.md5hashgenerator.com/）
6. 首页三个标签不知道怎么配置 √
7. Inject学习进度先放一放
8. twikoo评论系统显示失败。（暂放）
9. tianli ai摘要的个人网址还未配置（记得先去前端面板绑定域名[https://summary.zhheo.com/admin](https://note.youdao.com/)，再修改主题配置文件）
10. 主题配置文件banner未修改（[https://bu.dusays.com/2023/05/13/645fa3cf90d70.webp](https://note.youdao.com/)）
11. 搜索引擎收录网站未配置，后续在全局配置中修改（全局配置/搜素系统）。
12. 朋友圈未配置。