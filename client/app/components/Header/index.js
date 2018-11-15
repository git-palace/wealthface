import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => (
  <header className="w-100 row mx-auto">
    <div className="col-1 p-4">
      <Link to="/"><img src="/assets/img/logo.png" width="60px" height="60px" /></Link>
    </div>

    <div className="col-3 ml-auto my-auto text-right px-5 py-4">
      <button type="button" className="btn btn-outline-indigo waves-effect m-auto px-4 py-2 text-uppercase">Sign In</button>
    </div>
  </header>
);

export default Header;
