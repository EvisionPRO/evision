import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import Scrollchor from 'react-scrollchor';

import './styles.css';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">Services</Link>
      <Link to="/about" activeClassName="active">Work</Link>
      <Link to="/about" activeClassName="active">Skills</Link>
      <Scrollchor to="#section03">Sample 3</Scrollchor>
      <Scrollchor to="#section01">Sample 1</Scrollchor>
      <Scrollchor to="#section02">Sample 2</Scrollchor>
    </nav>
  );
};

export default Header;
