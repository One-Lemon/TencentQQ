import request from "./request";

const API = {
    /**
     * 获取聊天室内容
     * @param {string} id 用户id
     */
    async getTalkInfo(id) {
        const talkInfo = await request({
            url: `talkInfo/${id}`
        })
        return talkInfo;
    },

    /**
     * 发送消息
     * @param {object} data 消息内容
     */
    async sendTalk(req) {
        console.log(await request({
            url: `talkInfo/${req.talkId}`
        }))
    },

    /**
     * 查询用户
     * @param {string} username 用户名
     */
    async checkUser(username) {
        const data = await request({
            url: `user/username=${username}`
        })
        console.log(data);
    },

    /**
     * 登录
     */
    async login(username, password) {
        return await request({
            url: 'user/login',
            method: 'POST',
            data: {
                username,
                password
            }
        })
    }
}


export default API;