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
    }
}


export default API;