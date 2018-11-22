import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

class Header extends Component {
  constructor(props) {
    super(props)

    this.onTextboxEmailChange = this.onTextboxEmailChange.bind(this);
    this.onTextboxPasswordChange = this.onTextboxPasswordChange.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignOut = this.onSignOut.bind(this);

    this.state = {
      email: '',
      password: '',
      errorSignIn: false,
      errorMessage: '',
      signedIn: false
    }
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.setState({ signedIn: true });

      if (!user.is_verified && location.pathname !== "/confirm-email") {
        window.location.href = "/confirm-email";
      }
    }
  }

  onTextboxEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  onTextboxPasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  onSignIn(event) {
    event.preventDefault();
    event.stopPropagation();

    let form = event.target;

    if (event.target.checkValidity()) {
      const {
        email,
        password
      } = this.state;

      fetch('/api/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
        .then(res => res.json())
        .then(json => {
          this.setState({
            errorSignIn: !json.success,
            errorMessage: json.message
          });

          if (json.success) {
            this.setState({ signedIn: true });
            localStorage.setItem('user', JSON.stringify(json.user));
            $("#signin-form button.close").click();

            if (!json.user.is_verified && location.pathname !== "/confirm-email") {
              window.location.href = "/confirm-email";
            }
          }
        })
    }

    event.target.classList.add('was-validated');
  }

  onSignOut(event) {
    localStorage.removeItem('user');
    this.setState({ signedIn: false });
    location.href = "/";
  }

  render() {
    const { errorSignIn, errorMessage, signedIn } = this.state;

    return (
      <>
        <div className="modal fade" id="signin-form" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-notify" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body col-12 p-5">
                {(errorSignIn) ? (< div className="alert alert-danger" role="alert">{errorMessage}</div>) : (null)}
                <form className="needs-validation col-12" noValidate onSubmit={this.onSignIn}>
                  <div className="form-row">
                    <div className="col-md-12 mb-3 md-form">
                      <label htmlFor="modal-email">Email</label>
                      <input type="email" className="form-control" id="modal-email" required onChange={this.onTextboxEmailChange} />
                      <div className="invalid-feedback">Invalid Email</div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-md-12 mb-3 md-form">
                      <label htmlFor="modal-password">Password</label>
                      <input type="password" className="form-control" id="modal-password" required onChange={this.onTextboxPasswordChange} />
                      <div className="invalid-feedback">Invalid Password</div>
                    </div>
                  </div>

                  <div className="form-row">
                    <button className="btn btn-indigo mx-auto my-3" type="submit">Sign In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <header className="w-100 row mx-auto">
          <div className="col-1 p-4">
            <Link to="/"><img src="/assets/img/logo.png" width="60px" height="60px" /></Link>
          </div>

          <div className="col-3 ml-auto my-auto text-right px-5 py-4">
            {
              (!signedIn) ? (
                <button type="button" className="btn btn-outline-indigo waves-effect m-auto px-4 py-2 text-uppercase" data-toggle="modal" data-target="#signin-form">Sign In</button>
              ) : (
                  <button type="button" className="btn btn-outline-indigo waves-effect m-auto px-4 py-2 text-uppercase" onClick={this.onSignOut}>Log Out</button>
                )
            }
          </div>
        </header>
      </>
    )
  }
}

export default Header;
