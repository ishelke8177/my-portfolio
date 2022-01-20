import React from 'react';
import SocialContacts from '../../common/social-contact/SocialContacts';
import './about.css';

const about = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there 👋,
          <br /> I am <span className="info-name">Ishwar</span> Interested in{' '}
          <br />
          Full Stack Development
        </div>
        <div className="about-photo">
          <img
            src={require('../../../assets/coding.png')}
            className="coding-png"
            alt="coder"
          />
        </div>
      </div>
      <SocialContacts />
    </div>
  );
};

export default about;
