import React from 'react';

const Home = () => (
  <div className="container flex flex-column p-5">
    <h1 className="text-center">Start Investing Today</h1>

    <h4 className="text-center">We'll save your information so you don't have to fixll anything out again when you come back.</h4>

    <form className="text-center">

      <div className="form-row">
        <div className="col">
          <div className="md-form">
            <input type="text" id="first_name" className="form-control" />
            <label htmlFor="first_name">First name</label>
          </div>
        </div>
        <div className="col">
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
        <div className="col text-left">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="not_us_tax" />
            <label className="form-check-label" htmlFor="not_us_tax">
              <b>I am NOT a United State tax resident.</b>
            </label>
          </div>
        </div>

        <div className="col text-left">
          <label><b>Clicking <em>Get Started</em> accepts <a href="" target="_blank">terms of use</a>.</b></label>
        </div>
      </div>

    </form>

  </div>
);

export default Home;
