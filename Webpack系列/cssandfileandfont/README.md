# 样式、图片和第三方字体

### css常用插件
    
    postcss-loader


### 图片


### 第三方字体


### 打包过程中出现的问题:

###### 1.`Cannot read property 'tap' of undefined`报错
    新建项目时,安装插件html-webpack-plugin,默认版本是5.0.0,是因为版本过高出现的问题.

**解决办法:** 将 `package.json` 文件中的 `html-webpack-plugin` 设为低版本,如: `^4.5.1`,然后删除项目的 `node_modules` 和 `package-lock.json`,之后重新安装依赖.

```bach
rm -rf node_modules
rm package-lock.json
npm install
```

###### 2.`this.getOptions is not a function`报错
    新建项目时,安装插件less-loader,默认版本是8.0.0,是因为版本过高出现的问题.

**解决办法:** 将 `package.json` 文件中的 `less-loader` 设为低版本,如: `^7.3.0`,然后删除项目的 `node_modules` 和 `package-lock.json`,之后重新安装依赖.

```bach
rm -rf node_modules
rm package-lock.json
npm install
```


##### [返回](https://github.com/snailsmail/snailsmail-blog/tree/develop/Webpack%E7%B3%BB%E5%88%97)



