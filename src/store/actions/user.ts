import { GET_UESR_INFO } from '../constants'
import { EnthusiamAction, ISetUserInfoParams } from '@types'




export const getUserInfo = (res: ISetUserInfoParams): EnthusiamAction => {
    return {
        type: GET_UESR_INFO,
        data: res
    }
}
