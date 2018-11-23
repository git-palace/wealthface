import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './styles.scss'

class Steps extends Component {
    render() {
        return (
            <div className="container py-5 page-steps">
                <div className="row">
                    <div className="col-md-4 mb-4 d-flex flex-column px-3 step">
                        <h2 className="step-no mb-4">Step 1</h2>

                        <div className="card w-100">
                            <div className="card-body py-5 px-4">
                                <h2 className="card-title">What's your<br /> investment style?</h2>
                                <hr />

                                <p className="card-text">
                                    We'll start by assessing your <br />investment and rist needs.<br />
                                    Take 1-2 minutes to answer<br /> these questions so we can<br /> build a profile that/s right for<br /> you.
                                </p>

                                <Link to="/steps/select-style" className="btn btn-primary btn-block btn-lg mx-auto py-4">Get Started</Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4 mb-4 d-flex flex-column px-3 step" disabled>
                        <h2 className="step-no mb-4">Step 2</h2>

                        <div className="card w-100">
                            <div className="card-body py-5 px-4">
                                <h2 className="card-title">Set up your account</h2>
                                <hr />

                                <p className="card-text"></p>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4 mb-4 d-flex flex-column px-3 step" disabled>
                        <h2 className="step-no mb-4">Step 3</h2>

                        <div className="card w-100">
                            <div className="card-body py-5 px-4">
                                <h2 className="card-title">Set up your account</h2>
                                <hr />

                                <p className="card-text"></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Steps