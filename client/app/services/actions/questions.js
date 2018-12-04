import { POST } from './requests.js'
import { push } from 'react-router-redux'
import { QUESTIONS } from './types'

export const getAllQuestions = (dispatch, stepNo) => {
    POST('/api/question/get-all', { stepNo: stepNo }).then(data => {
        dispatch({ type: QUESTIONS.GET_ALL, data: data })

        if (stepNo == 1)
            dispatch(push('/steps/select-style'))
    })
}

export const setQuestion = (dispatch, questionIdx, answer, step) => {
    dispatch({ type: QUESTIONS.SET_QUESTION, data: { questionIdx: questionIdx, answer: answer, step: step } })
}