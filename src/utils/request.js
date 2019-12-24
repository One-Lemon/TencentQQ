import axios from 'axios';
import { message } from "antd";

/**
 * 错误码
 */
const codeMessage = {
    200: "服务器成功返回请求的数据。",
    201: "新建或修改数据成功。",
    202: "一个请求已经进入后台排队（异步任务）。",
    204: "删除数据成功。",
    400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
    401: "用户没有权限（令牌、用户名、密码错误）。",
    403: "用户得到授权，但是访问是被禁止的。",
    404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
    406: "请求的格式不可得。",
    410: "请求的资源被永久删除，且不会再得到的。",
    422: "当创建一个对象时，发生一个验证错误。",
    500: "服务器发生错误，请检查服务器。",
    502: "网关错误。",
    503: "服务不可用，服务器暂时过载或维护。",
    504: "网关超时。"
};

const baseUrl = "http://127.0.0.1:9999";
/**配置默认请求路径 */
axios.defaults.baseURL = baseUrl;
/**配置超时时间 */
axios.defaults.timeout = 10000;
/**
 * response 拦截器
 */
axios.interceptors.response.use(
    response => {
        const res = response.data;
        if (response.status !== 200 && response.request !== 200) {
            const msg = codeMessage[response.status];
            message.error(msg);
        } else {
            message.success({
                content: "请求成功，正在偷数据...",
                key: "request",
                duration: 0.5
            });
            return res;
        }
    },
    error => {
        message.error("接口出了点大问题!!!");
        return Promise.reject(error);
    }
);

const request = async (options) => {
    message.loading({
        content: "加载中...",
        key: "request"
    });
    if (typeof options != "object") {
        message.warn({
            content: "请求参数错误",
            key: "request",
            duration: 0.5
        });
        return;
    }
    const result = await axios.request({ ...options });
    if (result && result.code !== 0) {
        result.code === -1 && message.error({
            content: result.msg,
            duration: 2,
            key: "request"
        })
    } else {
        message.success({
            content: result.msg,
            duration: 2,
            key: "request"
        })
    }
    return result;
}

export default request;