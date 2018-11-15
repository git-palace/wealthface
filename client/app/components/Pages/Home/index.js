import React from 'react';

import './styles.scss';

const Home = () => (
  <div className="container flex flex-column p-5 page-home">
    <h1 className="text-center pb-4">Start Investing Today</h1>

    <h4 className="text-center pt-4">We'll save your information so you don't have to fixll anything out again<br/>when you come back.</h4>

    <form className="text-center">

      <div className="form-row">
        <div className="col mr-4">
          <div className="md-form">
            <input type="text" id="first_name" className="form-control" />
            <label htmlFor="first_name">First name</label>
          </div>
        </div>
        <div className="col ml-4">
          <div className="md-form">
            <input type="email" id="last_name" className="form-control" />
            <label htmlFor="last_name">Last name</label>
          </div>
        </div>
      </div>

      <div className="md-form mt-0">
        <input type="email" id="email" className="form-control" />
        <label htmlFor="email">Your Email</label>
      </div>

      <div className="md-form">
        <input type="password" id="password" className="form-control" />
        <label htmlFor="password">Password</label>
      </div>

      <div className="form-row">
        <div className="col text-left mr-4">
          <div className="form-check pl-0">
            <input type="checkbox" className="form-check-input" id="not_us_tax" />
            <label className="form-check-label" htmlFor="not_us_tax">
              <b>I am NOT a United State tax resident.</b>
            </label>
          </div>
        </div>

        <div className="col text-left ml-4">
          <label className="terms_of_use">Clicking Get Started accepts <b><a href="" target="_blank">terms of use</a>.</b></label>
        </div>
      </div>

      <button type="submit" className="col-6 btn btn-primary btn-block btn-lg mx-auto py-4">Get Started</button>

    </form>

  </div>
);

export default Home;
