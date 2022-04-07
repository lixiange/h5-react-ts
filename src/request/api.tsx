import {
    get,
    post
} from './http';
import shareConfig from "../config/WECHAT_SHARE";
  

const request = {
    wechatJssdk(data:object){
      return post(shareConfig.apiUrl,data)
    },
    pageLog(data:object) {
        return false;
    }
  }
  export  default request