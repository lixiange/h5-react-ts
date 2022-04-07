import { CHANGE_NUMBER_STATUS, INT_APP } from '../constants'
// import {clo} from 'lodash-es'


interface HomeInfoProps {
    number: number
}

export interface HomeListProps {
    data: HomeInfoProps,
    finishInit: boolean
}

interface ActionTypes {
    type: 'string',
    data: any
}

const initState: HomeListProps = {
    data: {
        number: 0
    },
    finishInit: false
}

export default function reducer(state = initState, action: ActionTypes) {
    switch (action.type) {
        case CHANGE_NUMBER_STATUS:
            state.data.number = action.data
            return { ...state, data: { ...state.data } };
        case INT_APP:
            state.finishInit = true
            return { ...state };
        default:
            return state
    }

}