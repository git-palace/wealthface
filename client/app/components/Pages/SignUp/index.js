import React, { Component } from 'react';

import './styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      isLoading: false
    };

    this.onTextboxChangeFirstName = this.onTextboxChangeFirstName.bind(this);
    this.onTextboxChangeLastName = this.onTextboxChangeLastName.bind(this);
    this.onTextboxChangeEmail = this.onTextboxChangeEmail.bind(this);
    this.onTextboxChangePassword = this.onTextboxChangePassword.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  onTextboxChangeFirstName(event) {
    this.setState({
      first_name: event.target.value
    });
  }

  onTextboxChangeLastName(event) {
    this.setState({
      last_name: event.target.value
    });
  }

  onTextboxChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  onTextboxChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  onSignUp(event) {
    const {
      first_name,
      last_name,
      email,
      password
    } = this.state;

    this.setState({ isLoading: true });

    fetch('/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
      })
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="container flex flex-column p-5 page-signup">
        <h1 className="text-center pb-4">Start Investing Today</h1>

        <h4 className="text-center pt-4">We'll save your information so you don't have to fixll anything out again<br />when you come back.</h4>

        <form className={"text-center " + (isLoading ? 'is-loading' : null)}>

          <div className="form-row">
            <div className="col mr-4">
              <div className="md-form">
                <input type="text" id="first_name" className="form-control" name="first_name" onChange={this.onTextboxChangeFirstName} />
                <label htmlFor="first_name">First name</label>
              </div>
            </div>
            <div className="col ml-4">
              <div className="md-form">
                <input type="text" id="last_name" className="form-control" name="last_name" onChange={this.onTextboxChangeLastName} />
                <label htmlFor="last_name">Last name</label>
              </div>
            </div>
          </div>

          <div className="md-form mt-0">
            <input type="email" id="email" className="form-control" name="email" onChange={this.onTextboxChangeEmail} />
            <label htmlFor="email">Your Email</label>
          </div>

          <div className="md-form">
            <input type="password" id="password" className="form-control" name="password" onChange={this.onTextboxChangePassword} />
            <label htmlFor="password">Password</label>
          </div>

          <div className="form-row">
            <div className="col text-left mr-4">
              <div className="form-check pl-0">
                <input type="checkbox" className="form-check-input" id="not_us_tax" name="not_us_tax" />
                <label className="form-check-label" htmlFor="not_us_tax">
                  <b>I am NOT a United State tax resident.</b>
                </label>
              </div>
            </div>

            <div className="col text-left ml-4">
              <label className="terms_of_use">Clicking Get Started accepts <b><a href="" target="_blank">terms of use</a>.</b></label>
            </div>
          </div>

          <button type="button" className="col-6 btn btn-primary btn-block btn-lg mx-auto py-4" onClick={this.onSignUp}>Get Started</button>
          {
            (isLoading) ? (
              <div className="col-12 preloader-container">
                <div className="preloader-wrapper big active">
                  <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (null)
          }
        </form>

      </div>
    );
  }
}
export default SignUp;
