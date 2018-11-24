import { POST } from './requests.js'
import { push } from 'react-router-redux'
import { QUESTIONS } from './types'

export const getAllQuestions = (dispatch, stepNo) => {
    POST('/api/questions/get-all', { stepNo: stepNo }).then(data => {
        dispatch({ type: QUESTIONS.GET_ALL, data: data })

        if (stepNo == 1)
            dispatch(push('/steps/select-style'))
    })
}