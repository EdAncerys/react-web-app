import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="about-page">
        <h3 className="title-name">About Me</h3>
        <p>
          Driven and ambitious Junior Software Developer with collaborative
          skills and strong attention to detail, looking for opportunities to
          continue to learn, challenge myself, and work with great people.
        </p>
        <p>
          I am a strong believer in the use of agile methodologies that helps to
          drive and manage team projects. Enjoying challenges and don't shy away
          from time-consuming challenges that can deliver better results and
          continuous learning process it involves.
        </p>
        <p>
          <a target="blank" href="https://makers.tech/">
            Makers Academy
          </a>{' '}
          graduate where I have grown as a person and as a developer. Learned
          best practices and methodologies: TDD, Agile development, XP values,
          team projects, code reviews, pair programming.
        </p>
      </div>
    );
  }
}
