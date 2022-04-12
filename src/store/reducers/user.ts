import { EnthusiamAction } from '@types'
import { GET_UESR_INFO } from '../constants'


export interface UserStateProps {
    hasLogin: boolean
}
export const defaultState: UserStateProps = {
    hasLogin: true
}

export default function GetUserInfo(state = defaultState, action: EnthusiamAction): UserStateProps {
    switch (action.type) {
        case GET_UESR_INFO:
            return { hasLogin: true }
        default:
            return state;
    };

}

