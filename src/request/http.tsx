import axios from 'axios'
import requestConfig from "../config/REQUEST_CONFIG";
import type { AxiosRequestConfig, AxiosResponse } from 'axios';


const baseURL = requestConfig.apiBase; //生产环境
const baseURL1 = requestConfig.apiBase1; //验证码
const testURL = requestConfig.apiTestBase; //测试环境
axios.defaults.timeout = requestConfig.timeout;

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    //请求头带上token
    // config.headers[""] = localStorage.getItem("");
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response) {
      return Promise.reject(response.data);
    } else {
      switch (true) {
        case error.message.includes("timeout"):
          return Promise.reject({ message: requestConfig.errorMsg.timeout });
        case error.message.includes("Network"):
          return Promise.reject({ message: requestConfig.errorMsg.network });
        default:
          return Promise.reject(error);
      }
    }
  }
);

const post = (url: string, params: object, body?: boolean, hasHeader?: boolean) => {
  return new Promise((resolve, reject) => {
    let d = function () {
      if (body) {
        return { data: params };
      } else {
        return { params: params };
      }
    };
    let header = function () {
      if (hasHeader) {
        return {
          headers: { "X-Intcolon-Key": "GohdSA*5ghAacDgnZ#gcKAC5jGCtKyrk" },
        };
      } else {
        return {};
      }
    };
    console.log(window.location.hostname);
    axios({
      baseURL: hasHeader
        ? baseURL1
        : process.env.NODE_ENV === "development"
          ? testURL
          : baseURL,
      url: url,
      method: "post",
      ...header(),
      ...d(),
    })
      .then((res: AxiosResponse) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const get = (url: string, params: object) => {
  return new Promise((resolve, reject) => {
    console.log(process.env.NODE_ENV);
    axios({
      baseURL: process.env.NODE_ENV === "development" ? testURL : baseURL,
      url: url,
      method: "get",
      params: params,
    })
      .then((res: AxiosResponse) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export { post, get };
