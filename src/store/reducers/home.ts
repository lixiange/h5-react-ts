import { CHANGE_NUMBER_STATUS, INT_APP } from '../constants'
import { EnthusiamAction } from '@types'

// import {clo} from 'lodash-es'


interface HomeInfoProps {
    number: number
}

export interface HomeListProps {
    data: HomeInfoProps,
    finishInit: boolean
}

const initState: HomeListProps = {
    data: {
        number: 0
    },
    finishInit: false
}

export default function reducer(state = initState, action: EnthusiamAction) {
    switch (action.type) {
        case CHANGE_NUMBER_STATUS:
            state.data.number = action.data;
            return { ...state, data: { ...state.data } };
        case INT_APP:
            state.finishInit = true
            return { ...state };
        default:
            return state
    }

}