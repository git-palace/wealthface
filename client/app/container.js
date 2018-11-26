import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router'
import { connect } from 'react-redux'

import {
    userSignIn,
    userSignUp,
    populateUserData,
    resendVerificationEmail
} from './services/actions/user.js'

import {
    getAllQuestions,
    setQuestion
} from './services/actions/questions.js'

import Header from './components/Header'
import Footer from './components/Footer'
import GetStarted from './components/Pages/GetStarted'
import ConfirmEmail from './components/Pages/ConfirmEmail'
import Help from './components/Pages/Help'
import Steps from './components/Pages/Steps'
import SelectStyle from './components/Pages/Steps/SelectStyle'

class Container extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        let token = window.localStorage.getItem('token')

        if (token) {
            let vEmailToken = ''

            if (this.props.location.pathname.indexOf('/confirm-email/') !== -1) {
                vEmailToken = this.props.location.pathname.replace('/confirm-email/', '')
            }
            this.props.populateUserData(token, vEmailToken)
        }
    }

    render() {
        return (
            <div className="row flex-xl-nowrap flex-column">
                <Header {...this.props} />

                <main className="p-5">
                    <Switch>
                        <Route exact path="/" component={() => (
                            <GetStarted {...this.props} />
                        )} />

                        <Route exact path="/confirm-email/:token?" component={() => (
                            <ConfirmEmail
                                {...this.props}
                                email={this.props.user.userData ? this.props.user.userData.email : null}
                            />
                        )} />

                        <Route exact path="/steps" component={() => (
                            <Steps {...this.props} />
                        )} />

                        <Route exact path="/steps/select-style" component={() => (
                            <SelectStyle {...this.props} />
                        )} />

                        <Route exact path="/help" component={Help} />
                    </Switch>
                </main>

                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSignIn: (email, password) => { userSignIn(dispatch, email, password) },
        userSignUp: (userData) => { userSignUp(dispatch, userData) },
        populateUserData: (token, vEmailToken) => { populateUserData(dispatch, token, vEmailToken) },
        resendVerificationEmail: () => { resendVerificationEmail(dispatch) },
        getAllQuestions: (stepNo) => { getAllQuestions(dispatch, stepNo) },
        setQuestion: (questionIdx, answer, step) => { setQuestion(dispatch, questionIdx, answer, step) },
    }
}

const mapStateToProps = (state) => {
    return { ...state }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container))