import React from 'react';
import './social-contact.css';
import { SocialData } from '../../../data/Social';

const SocialContacts = () => {
  return (
    <div className="social-contact">
      {SocialData.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" alt="social" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialContacts;
