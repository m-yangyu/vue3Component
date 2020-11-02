# vue3.0 组件库

## 开发环境

开发环境分两块内容

### 安装node_modules

npm run i

这个命令会执行几个步骤

1. npm install  安装当前组件项目的node_modules
2. npm run build 先预先打包一个当前的组件库
3. npm link  将本地组件库link一份
4. cd example 进入example文件夹
5. npm install 安装当前example的依赖
6. npm link @ddmc/ui 链接组件库依赖