import { Toast } from "antd-mobile/es";

import $request from "./api";
import { PromiseReturnType, ParametersObj } from '@types'


/**
 * 根据code码返回对应的处理函数
 * @param {number} curCode
 * @returns {function} 返回对应的异常处理函数
 */
const getErrorEvents = (curCode: number) => {
    return (message: string) => {
        Toast.show({ content: message, duration: 1500 });
    };
};

/**
 * 
 * @param method 需要请求的api
 * @param params 请求参数
 * @returns 返回的参数值
 */

export default async function dealError<T extends func>(method: T, params: ParametersObj<T>) {
    try {
        const res: Exclude<PromiseReturnType<typeof method>, null> = await method(params);
        return { error: null, res: res };
        // throw new Error('method类型不正确')
    } catch (error: any) {
        $request.pageLog({
            behaviorDesc: error.message || error.msg || error,
            logType: 2,
            // userId: localStorage.getItem("newOpenId"),
            behaviorType: 1,
            behavior: JSON.stringify({
                params,
                error,
                method: method,
                time: new Date(),
            }),
        });

        const errorEvent = getErrorEvents(error.code);
        errorEvent(error.message);
        return { error, res: null };
    }
}
