import React from 'react';
import moment from 'moment';

import './styles.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <span>Copyright 2015 - {moment().year()} Evision PRO  | All Rights Reserved</span>
    </div>
  );
};

export default Footer;
