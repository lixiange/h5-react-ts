import {
  get,
  post
} from './http';
import shareConfig from "@/config/WECHAT_SHARE";
import {IPageLog,IPageLogParams} from '@types'

const request = {
  wechatJssdk(data: object) {
    return post(shareConfig.apiUrl, data)
  },
  pageLog(data: IPageLogParams) {
    return post<IPageLog>(shareConfig.apiUrl, data);
  }
}
export default request