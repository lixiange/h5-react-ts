import { Toast } from "antd-mobile";
import $request from "./api";

/**
 * 处理调用者传过来的自定义回调函数
 * @param {number} curCode 当前的code码
 * @param {object} extraCallback 包含code ，callback 属性
 */
// const commonAction = (curCode:number, extraCallback:object) => {
//     if (extraCallback) {
//         //callback——调用者传过来的自定义回调
//         //code——调用者传过来的code码，当curCode===code 时执行callback
//         //若没有code吗，表示所有网络异常类型都执行callback
//         const { code, callback = () => { } } = extraCallback;
//         if (code !== 0 && (!code || code === curCode)) {
//             callback();
//         }
//     }
// };

/**
 * 根据code吗返回对应的处理函数
 * @param {number} curCode
 * @returns {function} 返回对应的异常处理函数
 */
const getErrorEvents = (curCode:number) => {
    return (message:string, { callback = () => { } }) => {
        callback();
        console.log('到这了')
        Toast.show({ content: message, duration: 1500 });
    };
};

export default async function dealError(method:(data:object)=>{}, params:object, extraCallback = {}) {
    try {
        const res = await method(params);

        return { error: null, res };
    } catch (error:any) {
        $request.pageLog({
            behaviorDesc: error.message || error.msg || error,
            logType: 2,
            userId: localStorage.getItem("newOpenId"),
            behaviorType: 1,
            behavior: JSON.stringify({
                params,
                error,
                method: method,
                time: new Date(),
            }),
        });

        const errorEvent = getErrorEvents(error.code);
        errorEvent(error.message, extraCallback);
        return { error, res: null };
    }
}
