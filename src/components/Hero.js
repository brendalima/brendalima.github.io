import React from 'react';
import kiks from '../kiks.png';
import bangs from '../bangs.png';

function Hero() {
  return (
    <div className="container-fluid">
      <div className="row align-items-center main">
        <div className="col right-side">
          <h1>Bringing all your ideas to life.</h1>
          <h4><strong>Brenda Lima</strong> - Fullstack web developer</h4>
        </div>
        <div className="col">
          <h3>Welcome! Kiara and Banguela will show you around!</h3>
          <img src={kiks} width="200" />
          <img src={bangs} width="130" />
        </div>
      </div>
    </div>
  )
}

export default Hero;