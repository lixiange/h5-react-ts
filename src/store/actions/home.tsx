import { EnthusiamAction } from '@types'
import { CHANGE_NUMBER_STATUS, INT_APP } from '../constants'


export const intApp = (): EnthusiamAction => {
    return {
        type: INT_APP,
    }
}


export const changeNumberStatus = (data: number): EnthusiamAction => {
    return {
        type: CHANGE_NUMBER_STATUS,
        data
    }
}
