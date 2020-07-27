import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-page">
        <h3 className="title-name">Get In Touch</h3>
        <p>Are you interested in working with me or just have a question?</p>
        <p>
          Email me at <span className="email">lookatemail@gmail.com</span>
        </p>
      </div>
    );
  }
}
