import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import Scrollchor from 'react-scrollchor';
import logo from '../../images/logo.png';

import './styles.css';

const Header = () => {
  return (
    <nav className="nav-wrapper">
      <IndexLink to="/" activeClassName="active">
        <img src={logo} />
      </IndexLink>
      <div className="links-wrapper">
        <Link to="/about" activeClassName="active">Services</Link>
        <Link to="/about" activeClassName="active">Work</Link>
        <Link to="/about" activeClassName="active">Skills</Link>
        <Scrollchor to="#section03">Sample 3</Scrollchor>
        <Scrollchor to="#section01">Sample 1</Scrollchor>
        <Scrollchor to="#section02">Sample 2</Scrollchor>
      </div>
    </nav>
  );
};

Header.propTypes = {
  myProp: PropTypes.bool
};

export default Header;
