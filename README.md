# 微信小程序手脚架

## 开发

```
//node推荐使用v10.11.0
# 安装依赖
yarn install
在小程序工具中,选择"工具"=>"构建npm" //生成miniprogram_npm目录

# 启动开发
yarn serve

# 打包脚本
yarn build

```

## 目录
```
|--pages //存放页面
|    |--index // 首页
|    |    |--index.js 首页脚本
|    |    |--index.wxml 首页渲染文件
|    |    |--index.less 首页样式文件
|    |    |--index.json 首页配置
|    |--logs // 日志
|    |    |--logs.js 日志脚本
|    |    |--logs.wxml 日志渲染文件
|    |    |--logs.less 日志样式文件
|    |    |--logs.json 日志配置
|--utils
|    |--util // 处理数据格式工具脚步
|    |--bus // 底层通信脚本
|    |--dom // 客户端交互脚本（e.g:授权、保存网络图片到相册、输入框绑定）
|    |--proxyValidator // 表单验证
|    |--request // 请求库
|--app.js //小程序入口脚本
|--app.wxss //小程序入口样式文件
|--app.json //小程序入口配置
|--project.config.js //小程序项目配置
|--task //gulp构建任务
|    |--default.js // 默认构建脚本
|    |--watch.js // 监听构建脚本
|    |--style.js // less转化wxss构建文件
|    |--eslint.js // eslint检查构建文件
|--gulp.config.js //gulp配置文件
|--gulpfile.js //gulp入口文件
```



## 功能
### Eslint检查/eslint

+ 提供 recommended 版，规则列表(https://cn.eslint.org/docs/rules/)。
+ 配置文件存放 gulp.config.js里的eslint_option.configFile字段。

### less支持/style
默认开启

+ 提供less语法转成wxss。


## 配置
配置文件gulp.config.js

```
//默认结构
{
    init: false, //是否开启
    TARGET_PATH: ['src/**'], //编辑文件
}
```

## 文档

构建npm: https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html

END.