import React, { ReactElement } from "react";
// import $request from "@/request/api.js";
import "./style.scss";

interface IProps {
    children: ReactElement
}

interface Istate {
    hasError: boolean
}


class ErrorBoundary extends React.Component<IProps, Istate> {
    constructor(props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // 将错误日志上报给服务器
        // $request.pageLog({
        //   behaviorDesc: "捕获页面中js错误",
        //   logType: 2,
        //   behaviorType: 2,
        //   userId: localStorage.getItem("newOpenId"),
        //   behavior: JSON.stringify({
        //     error,
        //     errorInfo,
        //   }),
        // });
    }

    render() {
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return (
                <div className="error_wrapper">
                    <h1 className="error">页面出错了，请您刷新重试!</h1>
                </div>
            );
        }

        return this.props.children;
    }
}
export default ErrorBoundary;
