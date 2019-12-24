# Tencent QQ 聊天

> 一个模仿 QQ 外观基于 sockit.io 的聊天室

## 运行项目

- `yarn install` 安装依赖
- `yarn start` 运行项目
- `nodemon server.js` 运行后台服务
- `yarn db` 启动接口

## 相关依赖包

- Antd 组件
- react-router-dom 路由
- styled-components
- react-redux 状态管理工具
- socket.io-client socket 客户端
- redux-thunk 异步
- redux-logger 日志
- axios
- json-server 模拟数据库
- socket.io socket.io-client websocket 加强版

---

# 服务端

> 基于 node.js 以及 socket.io

## 运行

- `yarn global add nodemon`
- `yarn global add json-server`
- `nodemon server.js`
- `json-server --watch --port 8001`

## 相关依赖包

- express 一个好用的 Web 应用框架
- json-server 假装是个数据库
- socket.io websocket 的一个 JS 库
