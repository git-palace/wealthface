import React, { Component } from 'react'

import './styles.scss'

class GetStarted extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      notUSTax: false,
      isLoading: false
    }

    this.onTextboxChangeFirstName = this.onTextboxChangeFirstName.bind(this)
    this.onTextboxChangeLastName = this.onTextboxChangeLastName.bind(this)
    this.onTextboxChangeEmail = this.onTextboxChangeEmail.bind(this)
    this.onTextboxChangePassword = this.onTextboxChangePassword.bind(this)
    this.onCheckboxChangeUSTax = this.onCheckboxChangeUSTax.bind(this)
    this.onSignUp = this.onSignUp.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errorSignUp)
      $('#signUp-errModal').modal()
    else
      this.setState({ isLoading: false })
  }

  componentDidMount() {
    this.setState({ isLoading: false })
  }

  onTextboxChangeFirstName(event) {
    this.setState({
      firstName: event.target.value
    })
  }

  onTextboxChangeLastName(event) {
    this.setState({
      lastName: event.target.value
    })
  }

  onTextboxChangeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  onTextboxChangePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  onCheckboxChangeUSTax(event) {
    this.setState({
      notUSTax: event.target.checked
    })
  }

  onSignUp(event) {
    event.preventDefault()
    event.stopPropagation()

    if (event.target.checkValidity()) {
      const {
        firstName,
        lastName,
        email,
        password,
        notUSTax
      } = this.state

      this.setState({ isLoading: true })

      this.props.userSignUp({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        notUSTax: notUSTax
      })

      this.setState({ isLoading: true })
    }

    event.target.classList.add('was-validated')
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="container flex flex-column p-5 page-signup">
        <h1 className="text-center pb-4">Start Investing Today</h1>

        <h4 className="text-center pt-4">We'll save your information so you don't have to fixll anything out again<br />when you come back.</h4>

        <form className={"needs-validation text-center " + (isLoading ? 'is-loading' : '')} noValidate onSubmit={this.onSignUp}>

          <div className="form-row">
            <div className="col mr-4">
              <div className="md-form">
                <input type="text" id="firstName" className="form-control" name="firstName" required onChange={this.onTextboxChangeFirstName} />
                <label htmlFor="firstName">First name</label>
                <div className="invalid-feedback">First name is required</div>
              </div>
            </div>
            <div className="col ml-4">
              <div className="md-form">
                <input type="text" id="lastName" className="form-control" name="lastName" required onChange={this.onTextboxChangeLastName} />
                <label htmlFor="lastName">Last name</label>
                <div className="invalid-feedback">Last name is required</div>
              </div>
            </div>
          </div>

          <div className="md-form mt-0">
            <input type="email" id="email" className="form-control" name="email" required onChange={this.onTextboxChangeEmail} />
            <label htmlFor="email">Your Email</label>
            <div className="invalid-feedback">Email is required</div>
          </div>

          <div className="md-form">
            <input type="password" id="password" className="form-control" name="password" required onChange={this.onTextboxChangePassword} />
            <label htmlFor="password">Password</label>
            <div className="invalid-feedback">Passsword is required</div>
          </div>

          <div className="form-row">
            <div className="col text-left mr-4">
              <div className="form-check pl-0">
                <input type="checkbox" className="form-check-input" id="notUSTax" name="notUSTax" onChange={this.onCheckboxChangeUSTax} />
                <label className="form-check-label" htmlFor="notUSTax">
                  <b>I am NOT a United State tax resident.</b>
                </label>
              </div>
            </div>

            <div className="col text-left ml-4">
              <label className="terms_of_use">Clicking Get Started accepts <b><a href="" target="_blank">terms of use</a>.</b></label>
            </div>
          </div>

          <button type="submit" className="col-6 btn btn-primary waves-effect btn-block btn-lg mx-auto py-4">Get Started</button>
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

        <div className="modal fade" id="signUp-errModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-notify modal-danger" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <p className="heading lead">SignUp Error</p>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="white-text">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <div className="text-center">
                  <i className="fa fa-check fa-4x mb-3 animated rotateIn"></i>
                  <p>{this.props.errorSignUpMsg}</p>
                </div>
              </div>

              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-outline-danger waves-effect" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default GetStarted
