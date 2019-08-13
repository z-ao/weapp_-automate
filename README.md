# 微信小程序手脚架

## 开发

```
# 安装依赖
yarn install

# 启动开发
yarn serve

# 打包脚本
yarn build

# 新增component
yarn com component名称

# 新增page
yarn page page名称
```

## 功能
### ES5+转换/script
默认开启   

+ 提供ES5+语法转成es2015语法。   
+ 支持直接使用yarn或npm的第三方库。

<aside style="color: red">注意：1. 需要把typescript功能关闭。2. 需要把小程序ES5+语法转化关闭。（project.config.json文件）</aside>

### Eslint检查/eslint
默认开启

+ 提供 recommended 版，规则列表(https://cn.eslint.org/docs/rules/)。
+ 配置文件存放 gulp.config.js里的eslint_option.configFile字段。

### less支持/style
默认开启

+ 提供less语法转成wxss。

### 拷贝/build
默认开启

+ 安照src目录拷贝到dist（默认）目录下。

### typescript支持/typescript

+ 把ts文件转成js文件。

## 配置
配置文件gulp.config.js

```
//默认结构
{
    init: false, //是否开启
    TARGET_PATH: ['src/**'], //开发文件
    IGNORE_PATH: [''] //忽略文件
}
```

END.