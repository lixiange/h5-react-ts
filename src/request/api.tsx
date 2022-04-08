import {
  get,
  post
} from './http';
import shareConfig from "../config/WECHAT_SHARE";

interface IPageLog {
  username: string,
  age: number

}

interface IPageLogParams {
  behavior: string,
  behaviorDesc: string,
  logType: number,
  behaviorType: number,
  [keys: string]: any;
}


const request = {
  wechatJssdk(data: object) {
    return post(shareConfig.apiUrl, data)
  },
  pageLog(data: IPageLogParams) {
    return post<IPageLog>(shareConfig.apiUrl, data);
  }
}
export default request