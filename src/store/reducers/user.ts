import { GET_UESR_INFO } from '../constants'

export interface UserStateProps {
    hasLogin:Boolean
}
export const defaultState: UserStateProps = {
        hasLogin:true
}
interface Iactions {
    type: string;
    data: any;
}
export default function GetUserInfo(state = defaultState, action: Iactions): UserStateProps {
    switch (action.type) {
        case GET_UESR_INFO:
            return {hasLogin:true}
        default:
            return state;
    };

}

