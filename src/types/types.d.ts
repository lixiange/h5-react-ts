import { AxiosPromise } from 'axios'

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


type MapStateToProps<T> = Readonly<ReturnType<T>>

type MapDispatchToProps<T> = Readonly<ReturnType<T>>;

type AxiosReturnType<T> = T extends (...args: any[]) => AxiosPromise<infer R> ? R : any

export { MapStateToProps, MapDispatchToProps,AxiosReturnType }