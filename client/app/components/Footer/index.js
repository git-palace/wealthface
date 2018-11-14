import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

const Footer = () => (
  <footer className="w-100 row mx-auto px-5 py-4">
    <Link to="/help" className="text-uppercase">Help</Link>

    <a className="ml-auto mb-0">Download our mobile apps</a>

    <Link to="" className="text-uppercase ml-4 mr-2">iPhone</Link>
    <Link to="" className="text-uppercase mx-2">Android</Link>
    <Link to="" className="social-icon mx-2"><span><i className="fa fa-facebook" aria-hidden="true"></i></span></Link>
    <Link to="" className="social-icon mx-2"><span><i className="fa fa-twitter" aria-hidden="true"></i></span></Link>
    <Link to="" className="social-icon mx-2"><span><i className="fa fa-instagram" aria-hidden="true"></i></span></Link>
    <Link to="" className="social-icon ml-2"><span><i className="fa fa-linkedin-square" aria-hidden="true"></i></span></Link>
  </footer>
);

export default Footer;
