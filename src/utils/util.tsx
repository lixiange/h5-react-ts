/**
 *
 * @param {string} name 地址栏参数名称
 * @returns {string |null} 传入的查询键对应的值
 */
type QueryStringProps = string | null;

const GetQueryString = (name: string): QueryStringProps => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
};

export {
    GetQueryString
};