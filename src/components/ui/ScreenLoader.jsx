import React from "react";
import '../../styles/UiStyle/ScreenLoader.css';

const ScreenLoader = () => {
  return (
    <div className="ScreenLoader">
      <div className="wrapper" style={{ animationDelay: '-1s' }}>
        <div
          style={{ animationDelay: '-1s', background: 'blue' }}
          className="ball"
        ></div>
      </div>
      <div className="wrapper" style={{ animationDelay: '-0.5s' }}>
        <div
          style={{ animationDelay: '-0.5s', background: 'yellow' }}
          className="ball"
        ></div>
      </div>
      <div className="wrapper">
        <div style={{ background: 'red' }} className="ball"></div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default ScreenLoader;
