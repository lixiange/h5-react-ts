import wechatShareConfig from "./WECHAT_SHARE";
import requestConfig from "./REQUEST_CONFIG";

const config = {
  title: "app",
  requestConfig,
  hashRouter: true,
  redirectMode: true,
  tel: "tel:400-820-6015",
  redirectQueryName: "path",
  previewHost:'oss.intcolon.com', //预览的前端域名，用来判断访问的是可拖拽页面预览h5
  defaultWechatShareConfig: wechatShareConfig,
  wechatAuthConfig: {
    use: true,
    openidKey: "mpOpenId",
    api: "https://kcpapi.intcolon.com/kcp/api/1/wechat/mp/authorize?redirectUrl=",
  }
};
export default config;