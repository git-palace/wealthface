import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="w-100 row mx-auto">
    <div className="col-1 p-3">
      <Link to="/"><img src="/assets/img/logo.png" width="60px" height="60px" /></Link>
    </div>

    <div className="col-3 ml-auto my-auto text-right p-3">
      <button type="button" className="btn btn-lg btn-outline-primary">Sign In</button>
    </div>
  </header>
);

export default Header;
