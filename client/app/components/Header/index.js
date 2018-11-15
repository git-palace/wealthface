import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="modal fade" id="signin-form" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold text-uppercase">Sign in</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-5">
                  <i className="fa fa-envelope prefix grey-text"></i>
                  <input type="email" id="defaultForm-email" className="form-control validate" />
                  <label data-error="wrong" data-success="right" htmlFor="defaultForm-email">Your email</label>
                </div>

                <div className="md-form mb-4">
                  <i className="fa fa-lock prefix grey-text"></i>
                  <input type="password" id="defaultForm-pass" className="form-control validate" />
                  <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass">Your password</label>
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-indigo">Login</button>
              </div>
            </div>
          </div>
        </div>

        <header className="w-100 row mx-auto">
          <div className="col-1 p-4">
            <Link to="/"><img src="/assets/img/logo.png" width="60px" height="60px" /></Link>
          </div>

          <div className="col-3 ml-auto my-auto text-right px-5 py-4">
            <button type="button" className="btn btn-outline-indigo waves-effect m-auto px-4 py-2 text-uppercase" data-toggle="modal" data-target="#signin-form">Sign In</button>
          </div>
        </header>
      </>
    )
  }
}

export default Header;
