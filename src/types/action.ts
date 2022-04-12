//store文件夹中action函数类型、函数参数类型，用于action文件中的函数类型和约束dispatch参数格式
//在reducer中可以通过type字段可辩识联合，来识别action对于data的类型
import * as constants from '@/store/constants'
console.log(constants.INT_APP)
interface IIntApp {
    type: typeof constants.INT_APP
}

interface IChangeNumberStatus {
    type: typeof constants.CHANGE_NUMBER_STATUS;
    data: number
}

export type ISetUserInfoParams = {
    name: string;
    age: string;
}

interface ISetUserInfo {
    type: typeof constants.GET_UESR_INFO,
    data: ISetUserInfoParams
}

export type EnthusiamAction = IIntApp | IChangeNumberStatus | ISetUserInfo