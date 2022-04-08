

declare global {
    interface Window {
        wx: {
            config: (config: unknown) => void,
            checkJsApi: (config: unknown) => void,
            ready: (config: unknown) => void,
            hideMenuItems: (config: unknown) => void,
            onMenuShareAppMessage: (config: unknown) => void,
            onMenuShareTimeline: (config: unknown) => void,

        }
    }
}

declare module 'axios' {
    export interface CustomSuccessData<T>{
        code: number;
        msg?: string;
        message?: string;
        data: T;
        [keys: string]: any;
    }
}


type MapStateToProps<T> = Readonly<ReturnType<T>>

type MapDispatchToProps<T> = Readonly<ReturnType<T>>;

type PromiseReturnType<T> = T extends (...args: any[]) => Promise<infer R> ? R : any

export { MapStateToProps, MapDispatchToProps,PromiseReturnType }