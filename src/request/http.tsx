import axios from 'axios'
import requestConfig from "../config/REQUEST_CONFIG";
import type { AxiosRequestConfig, AxiosResponse, CustomSuccessData } from 'axios';


const baseURL = requestConfig.apiBase; //生产环境
axios.defaults.timeout = requestConfig.timeout;

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
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
interface IAxiosPost {
  <T>(url: string, params: object, body?: boolean, hasHeader?: boolean): Promise<CustomSuccessData<T>>
}

interface IAxiosGet {
  <T>(url: string, params: object): Promise<CustomSuccessData<T>>
}

/**
 * 
 * @param url 请求url
 * @param params  请求参数
 * @param body 是否以json形式请求（false为以表单形式请求）
 * @param hasHeader 是否携带指定请求头
 * @returns promise对象
 */

const post: IAxiosPost = (url, params, body, hasHeader) => {
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
          // headers: { "X-Intcolon-Key": "GohdSA*5ghAacDgnZ#gcKAC5jGCtKyrk" },
        };
      } else {
        return {};
      }
    };
    axios({
      baseURL: baseURL,
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

const get: IAxiosGet = (url, params) => {
  return new Promise((resolve, reject) => {
    console.log(process.env.NODE_ENV);
    axios({
      baseURL: baseURL,
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
