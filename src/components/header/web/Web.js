import React from 'react';
import './web.css';

const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="fi fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi fi-rr-laptop"></i>Skills
        </a>
      </div>
      {/* <div className="web-option">
        <a href="#work">
          <i class="fi fi-rr-briefcase"></i>Work
        </a>
      </div> */}
      <div className="web-option">
        <a href="#contact">
          <i class="fi fi-rr-user"></i>Contact
        </a>
      </div>
    </div>
  );
};

export default Web;
