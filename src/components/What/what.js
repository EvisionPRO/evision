import React from 'react';


import './style.css';

const What = () => {
  return (
    <div className="what-section" style={{backgroundImage: 'url(' + require('../../images/fabric-bg.png') + ')'}}>
      <h2>What I Do</h2>
      <h3>I develop eye-catching, elegant and compelling websites. My projects include customizable features and meet the latest web standards.</h3>

      <div className="what-wrapper">
        <div className="item-wrapper">
          <h4>Web Design</h4>
          <p>I create fully responsive websites that include a functional webpage layout, effective content production, and elegant graphic design.</p>
          <a href="" className="btn">Learn More</a>
        </div>
        <div className="item-wrapper">
          <h4>Web Programming</h4>
          <p>I build custom web applications with interactive features using various programming languages and frameworks, including Javascript, React, Angularjs, Node.js.</p>
          <a href="" className="btn">Learn More</a> 
        </div>
        <div className="item-wrapper">
          <h4>E-Commerce</h4>
          <p>E-commerce web development requires innovation. I create online stores, e-learning platforms, and digital products. The platforms are friendly for all devices.</p>
          <a href="" className="btn">Learn More</a>
        </div>
      </div>

    </div>
  );
};

export default What;
