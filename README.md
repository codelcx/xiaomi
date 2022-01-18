## git常用命令
命令|描述
|--|--|
git clone|克隆项目
git pull origin main|拉取main分支最新内容与当前本地分支合并
it remote add origin|建立联系
it remote add origin|重命名分支
git push -u origin main|设置默认推送分支
git branch|分支查看
git checkout -b name|创建分支并切换
git add . | 添加至暂存区
git commit -m 'describe'|提交
git push|推送

## 项目步骤
### 1.git版本控制
- git remote add origin https://github.com/codelcx/xiaomi.git 与远程仓库建立联系

### 2.安装需要的库
- npm install less less-loader
- - 注意版本问题 less-loader@7.x
- - main.js全局引入app.use(less)
- npm install jquery
- - 引入 import $ from 'jquery'
- npm install swiper(修改引入路径)
- - swiper/vue/swiper-vue
- - swiper/swiper.min.css

### 3.配置别名
```
//vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/components/common',
        'content':'@/components/content',
      }
    }
  }
}
```
