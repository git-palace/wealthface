import { QUESTIONS } from '../actions/types.js'

const initialState = {
    curQuestionIdx: 0,
    list: [],
}

export default (state = initialState, action) => {
    let newState = null

    switch (action.type) {
        case QUESTIONS.GET_ALL:
            return Object.assign({}, state, { list: action.data })

        case QUESTIONS.SET_QUESTION:
            let questions = Object.assign({}, state.list)
            questions[action.data.questionIdx]['answer'] = action.data.answer

            let curQuestionIdx = state.curQuestionIdx

            if (action.data.step == 'next')
                curQuestionIdx++

            if (action.data.step == 'prev')
                curQuestionIdx--

            newState = Object.assign({}, state, { curQuestionIdx: curQuestionIdx, list: questions })

            return newState

        default:
            return state
    }
}