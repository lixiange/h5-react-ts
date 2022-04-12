const config = {
  timeout: 15000, //请求超时
  apiBase: "https://teapi.intcolon.com", //请求base地址
  apiBase1:'https://tesmsapi.intcolon.com',//短信发送地址
  apiTestBase: "https://testapi.intcolon.com", //请求base地址
  errorMsg: {
    network: "网络中断，请刷新重试！", //网络断开提示语
    timeout: "请求超时！", //请求超时提示语
  },
};
export default config;
