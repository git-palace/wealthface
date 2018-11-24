import { QUESTIONS } from '../actions/types.js'

export default (state = [], action) => {
    switch (action.type) {
        case QUESTIONS.GET_ALL:
            return action.data
        default:
            return state
    }
}