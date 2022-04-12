import type { CustomSuccessData } from 'axios';


export interface IAxiosPost {
    <T>(url: string, params: object, body?: boolean, hasHeader?: boolean): Promise<CustomSuccessData<T>>
}

export interface IAxiosGet {
    <T>(url: string, params: object): Promise<CustomSuccessData<T>>
}

export interface IPageLog {
    username: string,
    age: number

}

export interface IPageLogParams {
    behavior: string,
    behaviorDesc: string,
    logType: number,
    behaviorType: number,
    [keys: string]: any;
}
