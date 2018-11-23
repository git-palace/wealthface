import { USER } from './types.js'
import { POST } from './requests.js'
import { push } from 'react-router-redux'

export const userSignIn = (dispatch, email, password) => {
    POST('/api/user/signin', { email: email, password: password }).then(data => {
        dispatch({ type: USER.SIGN_IN, data: data })

        if (data.user) {
            if (!data.user.isVerified)
                dispatch(push('/confirm-email'))
            else
                dispatch(push('/steps'))
        }
    })
}

export const userSignUp = (dispatch, userData) => {
    let params = Object.assign({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        notUSTax: false
    }, userData)

    POST('/api/user/signup', params).then(data => {
        dispatch({ type: USER.SIGN_UP, data: data })
        dispatch(push('/confirm-email'))
    })
}

export const populateUserData = (dispatch, token, vEmailToken) => {
    POST('/api/user/parse-token', { token: token }).then(data => {
        dispatch({ type: USER.SIGN_IN, data: data })

        if (data.user) {
            if (!data.user.isVerified) {
                if (vEmailToken) {
                    POST('/api/user/verify-email', { vEmailtoken: vEmailToken, email: data.user.email }).then(data => {
                        console.log(data)
                        dispatch({ type: USER.EMAIL_VERIFICATION, data: data })

                        if (data.success) {
                            dispatch(push('/steps'))
                        } else {
                            dispatch(push('/confirm-email/'))
                        }
                    })
                } else {
                    dispatch(push('/confirm-email/'))
                }
            } else {
                dispatch(push('/steps'))
            }

        }
    })
}

export const resendVerificationEmail = (dispatch) => {
    POST('/api/user/resend-verficaition-email').then(data => {
        console.log(data)
    })
}