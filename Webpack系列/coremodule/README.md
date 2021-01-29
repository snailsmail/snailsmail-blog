# 核心用法

### 1.零配置

- 创建文件夹 `coremodule`
- `npm init -y` 生成默认内容的 `package.json` 文件
- `npm install -D webpack@4.43.0 webpack-cli@3.3.12` 安装依赖
- 根目录下新建 `src` 文件夹,在 `src` 下新建 `index.js` 作为 `webpack` 的入口文件
- 使用 `npx webpack` 进行打包

<center>

![效果图](./imgs/零配置打包.png)
</center>

注意:若 `src` 下没有 `index.js` 文件,则会报错,因为这是 `webpack` 默认的入口文件

    零配置只是最基础的配置项,一般项目都是需要自行添加配置的.

### 2.核心概念

- **entry** 打包入口文件
- **output** 打包输出文件
- **mode** 打包模式
- **module** 模块
- **loader** 模块解析
- **plugin** 插件

### 3.模块分析及使用

#### 3.1.还原零配置内容

  根目录下创建文件 `webpack.config.js`,`webpack` 默认的打包配置文件是指向 `webpack.config.js` 的,若是不创建 `webpack.config.js` 文件,可在执行打包命令后添加 `--config xxx` 指向新的配置文件

  - 根目录下新建 `config.js`,并添加以下内容:

  ```javascript
    const path = require('path')

    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'main.js'
        }
    }
  ```

  - 使用 `npx webpack --config config.js` 进行打包

<center>

![效果图](./imgs/自定义打包.png)
</center>

  检查与零配置打包内容一致.

#### 3.2.entry

    

#### 3.3.output

#### 3.4.mode

#### 3.5.loader

#### 3.6.plugin

