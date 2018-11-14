import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="w-100 row mx-auto p-3">
    <Link to="/help" className="text-uppercase">Help</Link>

    <p>
      Download our mobile apps
      <Link to="" className="text-uppercase">iPhone</Link>
      <Link to="" className="text-uppercase">Android</Link>
      <Link to=""></Link>
    </p>
  </footer>
);

export default Footer;
