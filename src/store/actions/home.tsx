import { CHANGE_NUMBER_STATUS,INT_APP } from '../constants'


export const changeNumberStatus = (data: number) => {
    return {
        type: CHANGE_NUMBER_STATUS,
        data
    }
}

export const intApp = () => {
    return {
        type: INT_APP,
    }
}