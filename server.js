// 创建express实例
const app = require('express')();
// socket.io不是真正的webSocket协议，所以还是需要通过http启动服务，再把Server给wsocket.io
const server = require("http").Server(app);
const io = require("socket.io")(server);
const fs = require("fs");
const axios = require('axios');

/**
 * 日志打印 
 * @param {any} msg 日志信息
 */
function log(msg) {
    let inner = new Date().toLocaleString() + '---';
    if (typeof msg === "object") {
        inner += JSON.stringify(inner);
    } else {
        inner += msg;
    }
    fs.writeSync(__dirname + '\\db.json', 'utf-8')
}

// 启动服务
server.listen(4003);

const baseUrl = "http://127.0.0.1:4000";
/**
 * 监听客户端的调用
 * socket为当前接入的服务端信息
 * connect优先于connection
 * emit 发送  另一边需要用on 监听
 */
io.on("connection", (socket) => {
    socket.on("login", async (res, cb) => {
        console.log(res);
        console.log(socket.id);
        let req = {};
        // 查询该用户是否存在
        await axios(`${baseUrl}/user?username=${res.username}`)
            .then(async r => {
                if (r.status === 200) {
                    let result = r.data;
                    if (result.length > 0) {
                        if (result[0].username === res.username && result[0].password === res.password) {
                            Object.assign(result, {
                                "isLogin": true,
                                "talkId": socket.id
                            })
                            await axios(`${baseUrl}/user?username=${res.username}`, {
                                data: result,
                                method: "PUT"
                            }).then(e => {
                                req = {
                                    code: 200,
                                    msg: '登陆成功'
                                }
                            })
                            // 需要把最新的talkId存入db.json
                        } else {
                            req = {
                                code: 201,
                                msg: '密码错误'
                            }
                        }
                    } else {
                        // 不存在用户，创建
                        await axios(`${baseUrl}/user`, {
                            data: {
                                "username": res.username,
                                "age": 18,
                                "isLogin": true,
                                "password": res.password,
                                "talkId": socket.id
                            },
                            method: "POST"
                        }).then(e => {
                            req = {
                                code: 200,
                                msg: '用户创建成功'
                            }
                        })
                    }
                } else {
                    req = {
                        code: r.status,
                        msg: r.statusText
                    }
                }
            })
        cb(req);
    })
})

