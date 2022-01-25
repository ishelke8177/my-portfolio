import React from 'react';
import './contact.css';
import SocialContacts from '../../common/social-contact/SocialContacts';
import Separator from '../../common/separator/Separator';

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContacts />
        </div>
        <div className="download">
          <a download href={require('../../../assets/IshwarResume_2022.pdf')}>
            <i class="fi-rr-cloud-download download-icon" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
