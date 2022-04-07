import { merge } from "lodash-es";
import config from "../../config";
import request from "../../request/api";

const shareConfig = (opt = { query: '' }) => {
  if (process.env.NODE_ENV !== "production") {
    return;
  }
  const { origin, pathname, search } = window.location;
  let href = origin + pathname + search;
  console.log(config);
  request
    .wechatJssdk({
      href,
    })
    .then((res: any) => {
      let data = res.signature;
      window.wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: config.defaultWechatShareConfig.jsApiList,
      });
      const { title, desc, imgUrl, link } = merge(
        config.defaultWechatShareConfig,
        opt
      );
      // 如果未设置link值默认使用 origion+pathname 地址作为分享链接
      let shareLink = link || origin + pathname;
      shareLink += opt.query || "";
      window.wx.ready(function () {
        window.wx.hideMenuItems({
          menuList: ["menuItem:copyUrl"],
        });
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，
        // 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。
        // 对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        window.wx.onMenuShareAppMessage({
          title, // 分享标题
          desc, // 分享描述
          link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl, // 分享图标
          success: function () { },
        });
        //分享到朋友圈
        window.wx.onMenuShareTimeline({
          title, // 分享标题
          desc, // 分享描述
          link: shareLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl, // 分享图标
          success: function () { },
        });
      });
    });
};
export default shareConfig;
