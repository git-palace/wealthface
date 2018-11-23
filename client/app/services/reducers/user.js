import { USER } from '../actions/types.js'

const initState = {
    errorSignIn: false,
    isSignedIn: false,
    errorSignInMsg: '',
    userData: null,
    vEmailError: false,
    vEmailErrorMsg: '',
    errorSignUp: false,
    errorSignUpMsg: ''
}

export default (state = initState, action) => {
    let newState = null

    switch (action.type) {
        case USER.SIGN_IN:
            newState = Object.assign({}, state, {
                errorSignIn: !action.data.success,
                errorSignInMsg: action.data.message,
                isSignedIn: action.data.success
            })

            if (action.data.success) {
                window.localStorage.setItem('token', action.data.token)

                newState = Object.assign({}, newState, {
                    userData: action.data.user
                })
            }

            return newState

        case USER.SIGN_UP:
            newState = Object.assign({}, state, {
                errorSignUp: !action.data.success,
                errorSignUpMsg: action.data.message,
                isSignedIn: action.data.success
            })

            if (action.data.success) {
                window.localStorage.setItem('token', action.data.token)

                newState = Object.assign({}, newState, {
                    userData: action.data.user
                })
            }

            return newState


        case USER.EMAIL_VERIFICATION:
            newState = Object.assign({}, state, {
                vEmailError: !action.data.success,
                vEmailErrorMsg: action.data.message
            })

            if (action.data.success) {
                window.localStorage.setItem('token', action.data.token)

                newState = Object.assign({}, newState, {
                    userData: action.data.user
                })
            }

            return newState
        default:
            return state
    }
}