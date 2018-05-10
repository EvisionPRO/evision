import React from 'react';
import MainMenu from './Menu/mainmenu.js'

import './styles.css';

const Header = () => {
  return (
    <div className="video-header-wrapper">
      <MainMenu className="navigation-menu-wrapper" />
      <video className="video-wrapper" autoPlay loop muted>
          <source src="https://s3.amazonaws.com/evisionpro/media/evision-video.mp4" type="video/mp4" />
      </video>
      <div className="video-content-wrapper">
        <p>Hello, my name is Jarek Sliz and I'am a</p>
        <h1>Front End Web Developer</h1>
        <p>creating MODERN and RESPONSIVE Web Applications</p>
        <a href="#" className="btn">Check Out My Work</a>
      </div>
    </div>
  );
};

export default Header;
