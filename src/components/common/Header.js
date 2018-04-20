import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import Scrollchor from 'react-scrollchor';

import './styles.css';

const Header = () => {
  return (
    <nav className="nav-wrapper">
      <IndexLink to="/" activeClassName="active">Home
      </IndexLink>
      <div className="links-wrapper">
        <Link to="/about" activeClassName="active" className="nav-item">Services</Link>
        <Link to="/about" activeClassName="active" className="nav-item">Work</Link>
        <Link to="/about" activeClassName="active" className="nav-item">Skills</Link>
        <Scrollchor to="#section03" className="nav-item">Sample 3</Scrollchor>
        <Scrollchor to="#section01" className="nav-item">Sample 1</Scrollchor>
        <Scrollchor to="#section02" className="nav-item">Sample 2</Scrollchor>
      </div>
    </nav>
  );
};

Header.propTypes = {
  myProp: PropTypes.bool
};

export default Header;
